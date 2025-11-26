export const FILENAMES = {
  ENUMS: './enums.ts',
  MODELS: './models.ts',
  INDEX: './index.ts',
}

export const PRISMA_ZOD_TYPES_MAP: Record<string, string> = {
  Decimal: 'number',
  Int: 'number',
  Float: 'number',
  BigInt: 'number',
  DateTime: 'date',
  Boolean: 'boolean',
  String: 'string',
}

export const PRISMA_TYPES = Object.keys(PRISMA_ZOD_TYPES_MAP)
