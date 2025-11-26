import type { GeneratorOptions } from '@prisma/generator-helper'
import { Project, SourceFile as TsMorphSourceFile } from 'ts-morph'
import { ArrayElement } from 'type-fest'
import {
  createPrinter,
  createSourceFile,
  EmitHint,
  factory,
  NewLineKind,
  NodeFlags,
  PropertyAssignment,
  ScriptTarget,
  SourceFile,
  SyntaxKind,
} from 'typescript'

import { FILENAMES, PRISMA_TYPES, PRISMA_ZOD_TYPES_MAP } from '../constants'
import { isEmpty } from '../utils'

interface IAddModelOptions {
  forceOptionalFields: boolean
  skipIdField: boolean
  modelSuffix: string
  enums: string[]
}

export class TsGenerator {
  private readonly tsSource: SourceFile
  private readonly project = new Project()
  private readonly printer = createPrinter({
    newLine: NewLineKind.LineFeed,
  })

  private readonly sourceFile: TsMorphSourceFile

  constructor(private readonly path: string) {
    this.tsSource = createSourceFile(this.path, '', ScriptTarget.ES2020)
    this.sourceFile = this.project.createSourceFile(this.path, '', {
      overwrite: true,
    })
  }

  public addZodImport() {
    const {
      createImportDeclaration,
      createImportClause,
      createNamespaceImport,
      createIdentifier,
      createStringLiteral,
    } = factory

    const declaration = createImportDeclaration(
      [],
      createImportClause(
        undefined,
        undefined,
        createNamespaceImport(createIdentifier('z')),
      ),
      createStringLiteral('zod'),
    )

    this.sourceFile.insertText(
      this.sourceFile.getFullText().length,
      this.printer.printNode(EmitHint.Unspecified, declaration, this.tsSource),
    )
    return this
  }

  public addEnum(
    enumModel: ArrayElement<GeneratorOptions['dmmf']['datamodel']['enums']>,
  ) {
    const {
      createVariableDeclaration,
      createIdentifier,
      createAsExpression,
      createTypeReferenceNode,
      createObjectLiteralExpression,
      createPropertyAssignment,
      createStringLiteral,
      createVariableStatement,
      createModifier,
      createCallExpression,
      createPropertyAccessExpression,
      createVariableDeclarationList,
    } = factory

    const properties: PropertyAssignment[] = []
    for (const enumValue of enumModel.values) {
      properties.push(
        createPropertyAssignment(
          createIdentifier(enumValue.name),
          createStringLiteral(enumValue.name),
        ),
      )
    }

    const enumStatement = createVariableStatement(
      [createModifier(SyntaxKind.ExportKeyword)],
      createVariableDeclarationList(
        [
          createVariableDeclaration(
            createIdentifier(enumModel.name),
            undefined,
            undefined,
            createAsExpression(
              createObjectLiteralExpression(properties),
              createTypeReferenceNode(createIdentifier('const')),
            ),
          ),
        ],
        NodeFlags.Const,
      ),
    )

    const schemaStatement = createVariableStatement(
      [createModifier(SyntaxKind.ExportKeyword)],
      createVariableDeclarationList(
        [
          createVariableDeclaration(
            createIdentifier(`${enumModel.name}Enum`),
            undefined,
            undefined,
            createCallExpression(
              createPropertyAccessExpression(
                createIdentifier('z'),
                createIdentifier('nativeEnum'),
              ),
              [],
              [createIdentifier(enumModel.name)],
            ),
          ),
        ],
        NodeFlags.Const,
      ),
    )

    this.sourceFile.insertText(
      this.sourceFile.getFullText().length,
      this.printer.printNode(
        EmitHint.Unspecified,
        enumStatement,
        this.tsSource,
      ),
    )
    this.sourceFile.insertText(
      this.sourceFile.getFullText().length,
      this.printer.printNode(
        EmitHint.Unspecified,
        schemaStatement,
        this.tsSource,
      ),
    )
    return this
  }

  public addPureModel(
    model: ArrayElement<GeneratorOptions['dmmf']['datamodel']['models']>,
    enums: string[],
  ) {
    return this.addModel(model, {
      enums,
      modelSuffix: '',
      skipIdField: false,
      forceOptionalFields: false,
    })
  }

  public addCreateModel(
    model: ArrayElement<GeneratorOptions['dmmf']['datamodel']['models']>,
    enums: string[],
  ) {
    return this.addModel(model, {
      enums,
      modelSuffix: 'Create',
      skipIdField: true,
      forceOptionalFields: false,
    })
  }

  public addUpdateModel(
    model: ArrayElement<GeneratorOptions['dmmf']['datamodel']['models']>,
    enums: string[],
  ) {
    return this.addModel(model, {
      enums,
      modelSuffix: 'Update',
      skipIdField: true,
      forceOptionalFields: true,
    })
  }

  public addBarrelExport(fullFilePaths: string[]) {
    const { createExportDeclaration, createStringLiteral } = factory

    const files = fullFilePaths.map((filename) =>
      filename.replace(/\.[^/.]+$/, ''),
    )
    return files.map((filename) => {
      const declaration = createExportDeclaration(
        [],
        false,
        undefined,
        createStringLiteral(filename),
      )

      this.sourceFile.insertText(
        this.sourceFile.getFullText().length,
        this.printer.printNode(
          EmitHint.Unspecified,
          declaration,
          this.tsSource,
        ),
      )
      return this
    })
  }

  private addModel(
    model: ArrayElement<GeneratorOptions['dmmf']['datamodel']['models']>,
    { modelSuffix, forceOptionalFields, skipIdField, enums }: IAddModelOptions,
  ) {
    const {
      createVariableDeclaration,
      createIdentifier,
      createTypeAliasDeclaration,
      createTypeReferenceNode,
      createObjectLiteralExpression,
      createPropertyAssignment,
      createQualifiedName,
      createVariableStatement,
      createModifier,
      createCallExpression,
      createPropertyAccessExpression,
      createTypeQueryNode,
      createVariableDeclarationList,
    } = factory

    const enumsImport: string[] = []

    const modelNameIdentifier = createIdentifier(
      `${model.name}Model${modelSuffix}Schema`,
    )

    const properties: PropertyAssignment[] = []
    for (const field of model.fields) {
      const { isGenerated, isId, isRequired, type, name } = field
      if (
        isGenerated ||
        (!PRISMA_TYPES.includes(type) && !enums.includes(type)) ||
        (skipIdField && isId)
      ) {
        continue
      }

      if (enums.includes(type)) {
        enumsImport.push(type)
      }

      const zodTypeExpression = enums.includes(type)
        ? createIdentifier(`${type}Enum`)
        : createCallExpression(
            createPropertyAccessExpression(
              createIdentifier('z'),
              createIdentifier(PRISMA_ZOD_TYPES_MAP[type] || 'any'),
            ),
            [],
            [],
          )

      properties.push(
        createPropertyAssignment(
          createIdentifier(name),
          isRequired && !forceOptionalFields
            ? zodTypeExpression
            : createCallExpression(
                createPropertyAccessExpression(
                  zodTypeExpression,
                  createIdentifier('nullable'),
                ),
                [],
                [],
              ),
        ),
      )
    }

    const modelStatement = createVariableStatement(
      [createModifier(SyntaxKind.ExportKeyword)],
      createVariableDeclarationList(
        [
          createVariableDeclaration(
            modelNameIdentifier,
            undefined,
            undefined,
            createCallExpression(
              createPropertyAccessExpression(
                createIdentifier('z'),
                createIdentifier('object'),
              ),
              [],
              [createObjectLiteralExpression(properties)],
            ),
          ),
        ],
        NodeFlags.Const,
      ),
    )

    const typeAliasDeclaration = createTypeAliasDeclaration(
      [createModifier(SyntaxKind.ExportKeyword)],
      createIdentifier(`${model.name}${modelSuffix}Type`),
      [],
      createTypeReferenceNode(
        createQualifiedName(createIdentifier('z'), createIdentifier('infer')),
        [createTypeQueryNode(modelNameIdentifier)],
      ),
    )

    this.sourceFile.insertText(
      this.sourceFile.getFullText().length,
      this.printer.printNode(
        EmitHint.Unspecified,
        modelStatement,
        this.tsSource,
      ),
    )
    this.sourceFile.insertText(
      this.sourceFile.getFullText().length,
      this.printer.printNode(
        EmitHint.Unspecified,
        typeAliasDeclaration,
        this.tsSource,
      ),
    )

    return enumsImport
  }

  public addEnumsImport(enums: string[]) {
    const {
      createImportDeclaration,
      createImportClause,
      createNamedImports,
      createStringLiteral,
      createImportSpecifier,
      createIdentifier,
    } = factory

    if (!isEmpty(enums)) {
      this.sourceFile.insertText(
        this.sourceFile.getFullText().length,
        this.printer.printNode(
          EmitHint.Unspecified,
          createImportDeclaration(
            [],
            createImportClause(
              undefined,
              undefined,
              createNamedImports(
                enums.map((name) =>
                  createImportSpecifier(
                    false,
                    undefined,
                    createIdentifier(`${name}Enum`),
                  ),
                ),
              ),
            ),
            createStringLiteral(FILENAMES.ENUMS),
          ),
          this.tsSource,
        ),
      )
    }
  }

  public save() {
    return this.sourceFile.save()
  }
}
