import { rule as noWrongImportPath } from './rules/import-path'
import { rule as noImportExtension } from './rules/no-extension'

export = {
  rules: {
    'no-wrong-api-client-import-path': noWrongImportPath,
    'no-import-extension': noImportExtension,
  },
}
