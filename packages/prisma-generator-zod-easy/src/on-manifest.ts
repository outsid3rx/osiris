import type { GeneratorManifest } from '@prisma/generator-helper'

export function onManifest(): GeneratorManifest {
  return {
    defaultOutput: './shared/zod',
    prettyName: 'Generate zod-schemas for create and update operations',
  }
}
