import type { GeneratorOptions } from '@prisma/generator-helper'
import { Project, SourceFile as TsMorphSourceFile } from 'ts-morph'
import { ArrayElement } from 'type-fest'
import {
  createPrinter,
  createSourceFile,
  EmitHint,
  factory,
  Identifier,
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
  enums: string[]
  ignoredFields?: string[]
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
            createIdentifier(`${enumModel.name}Enum`),
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
            createIdentifier(`${enumModel.name}EnumSchema`),
            undefined,
            undefined,
            createCallExpression(
              createPropertyAccessExpression(
                createIdentifier('z'),
                createIdentifier('nativeEnum'),
              ),
              [],
              [createIdentifier(`${enumModel.name}Enum`)],
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

  public addModel(
    model: ArrayElement<GeneratorOptions['dmmf']['datamodel']['models']>,
    { enums, ignoredFields = ['createdAt', 'updatedAt'] }: IAddModelOptions,
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
      createTrue,
    } = factory

    const enumsImport: string[] = []

    const modelNameIdentifier = createIdentifier(`${model.name}ModelSchema`)
    const modelCreateNameIdentifier = createIdentifier(
      `${model.name}ModelCreateSchema`,
    )
    const modelUpdateNameIdentifier = createIdentifier(
      `${model.name}ModelUpdateSchema`,
    )

    const properties: PropertyAssignment[] = []
    for (const field of model.fields) {
      const { isGenerated, isRequired, type, name } = field
      if (
        (!PRISMA_TYPES.includes(type) && !enums.includes(type)) ||
        ignoredFields.includes(name) ||
        isGenerated
      ) {
        continue
      }

      if (enums.includes(type)) {
        enumsImport.push(type)
      }

      const zodTypeExpression = enums.includes(type)
        ? createIdentifier(`${type}EnumSchema`)
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
          isRequired
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
    const createModelStatement = createVariableStatement(
      [createModifier(SyntaxKind.ExportKeyword)],
      createVariableDeclarationList(
        [
          createVariableDeclaration(
            modelCreateNameIdentifier,
            undefined,
            undefined,
            createCallExpression(
              createPropertyAccessExpression(
                modelNameIdentifier,
                createIdentifier('omit'),
              ),
              [],
              [
                createObjectLiteralExpression([
                  createPropertyAssignment(
                    createIdentifier('id'),
                    createTrue(),
                  ),
                ]),
              ],
            ),
          ),
        ],
        NodeFlags.Const,
      ),
    )
    const updateModelStatement = createVariableStatement(
      [createModifier(SyntaxKind.ExportKeyword)],
      createVariableDeclarationList(
        [
          createVariableDeclaration(
            modelUpdateNameIdentifier,
            undefined,
            undefined,
            createCallExpression(
              createPropertyAccessExpression(
                modelCreateNameIdentifier,
                createIdentifier('partial'),
              ),
              [],
              [],
            ),
          ),
        ],
        NodeFlags.Const,
      ),
    )

    const typesDeclarations = (
      [
        [`${model.name}Type`, modelNameIdentifier],
        [`${model.name}CreateType`, modelCreateNameIdentifier],
        [`${model.name}UpdateType`, modelUpdateNameIdentifier],
      ] as [string, Identifier][]
    ).map(([name, identifier]) =>
      createTypeAliasDeclaration(
        [createModifier(SyntaxKind.ExportKeyword)],
        createIdentifier(name),
        [],
        createTypeReferenceNode(
          createQualifiedName(createIdentifier('z'), createIdentifier('infer')),
          [createTypeQueryNode(identifier)],
        ),
      ),
    )

    ;[
      modelStatement,
      createModelStatement,
      updateModelStatement,
      ...typesDeclarations,
    ].forEach((statement) =>
      this.sourceFile.insertText(
        this.sourceFile.getFullText().length,
        this.printer.printNode(EmitHint.Unspecified, statement, this.tsSource),
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
                    createIdentifier(`${name}EnumSchema`),
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
