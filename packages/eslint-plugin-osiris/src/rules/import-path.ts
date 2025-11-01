import { Rule } from 'eslint'

export const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Контролирует правильный импорт apiClient',
      recommended: true,
    },
    fixable: 'code',
    schema: [],
    messages: {
      wrongImport: 'Импорт apiClient должен быть из "~shared/api"',
    },
  },

  create(context: Rule.RuleContext) {
    return {
      ImportDeclaration(node) {
        if (
          node.specifiers.find(
            (specifier) => specifier.local.name === 'apiClient',
          ) &&
          node.source.value !== '~shared/api'
        ) {
          context.report({
            node,
            messageId: 'wrongImport',
            fix: (fixer) => {
              return fixer.replaceText(node.source, '"~shared/api"')
            },
          })
        }
      },
    }
  },
}
