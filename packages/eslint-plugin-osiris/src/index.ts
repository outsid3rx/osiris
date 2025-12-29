import { rule as noWrongImportPath } from './rules/import-path'
import { rule as noImportExtension } from './rules/no-extension'
import { rule as noNonTypeNamespaces } from './rules/non-types-namespaces'

export = {
  rules: {
    'no-wrong-api-client-import-path': noWrongImportPath,
    'no-import-extension': noImportExtension,
    'no-non-type-namespaces': noNonTypeNamespaces,
  },
}
