import { Rule } from 'eslint'
import { Node } from 'estree'

export const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Проверяет отсутствие неймспейсов, содержащих не только типы',
      recommended: true,
    },
    fixable: 'code',
    schema: [],
    messages: {
      wrongNamespaceUsage: 'Неймспейсы разрешены только для типов',
    },
  },

  create(context: Rule.RuleContext) {
    return {
      'TSModuleDeclaration[kind="namespace"]:has(TSModuleBlock > :not(TSInterfaceDeclaration, TSTypeAliasDeclaration))'(
        node: Node,
      ) {
        context.report({
          node,
          messageId: 'wrongNamespaceUsage',
        })
      },
    }
  },
}
