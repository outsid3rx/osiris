import type { GeneratorOptions } from '@prisma/generator-helper'
import { mkdirSync } from 'node:fs'
import { join } from 'node:path'

import { FILENAMES } from './constants'
import { TsGenerator } from './modules/ts-generator'
import { isEmpty } from './utils'

export async function onGenerate(options: GeneratorOptions) {
  const outputDir = options.generator.output?.value ?? './shared/zod'
  mkdirSync(outputDir, { recursive: true })

  const enums = options.dmmf.datamodel.enums.map(({ name }) => name)
  const dataModel = options.dmmf.datamodel
  if (!isEmpty(options.dmmf.datamodel.enums)) {
    const enumsGenerator = new TsGenerator(join(outputDir, FILENAMES.ENUMS))
    enumsGenerator.addZodImport()

    for (const schemaEnum of dataModel.enums) {
      enumsGenerator.addEnum(schemaEnum)
    }

    await enumsGenerator.save()
  }

  const modelsGenerator = new TsGenerator(join(outputDir, FILENAMES.MODELS))
  modelsGenerator.addZodImport()

  const enumsImport = new Set<string>()
  for (const schemaModel of dataModel.models) {
    modelsGenerator
      .addPureModel(schemaModel, enums)
      .forEach((name) => enumsImport.add(name))
    modelsGenerator
      .addCreateModel(schemaModel, enums)
      .forEach((name) => enumsImport.add(name))
    modelsGenerator
      .addUpdateModel(schemaModel, enums)
      .forEach((name) => enumsImport.add(name))
  }

  modelsGenerator.addEnumsImport([...enumsImport])

  await modelsGenerator.save()

  const indexGenerator = new TsGenerator(join(outputDir, FILENAMES.INDEX))
  indexGenerator.addBarrelExport(
    [
      !isEmpty(options.dmmf.datamodel.enums) ? FILENAMES.ENUMS : undefined,
      FILENAMES.MODELS,
    ].filter(Boolean),
  )

  await indexGenerator.save()
}
