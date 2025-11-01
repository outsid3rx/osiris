import { Rule } from 'eslint'
import { ExportAllDeclaration, ImportDeclaration } from 'estree'

const RE_EXTENSIONS = /\.(ts|tsx|js|jsx|mjs|cjs)$/

export const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Проверяет отсутствие расширений в импортируемых и экспортируемых модулях',
      recommended: true,
    },
    fixable: 'code',
    schema: [],
    messages: {
      wrongExtensionImport:
        'Не используйте расширения в путях импортов и экспортов для .ts*, .js* файлов',
    },
  },

  create(context: Rule.RuleContext) {
    return {
      'ImportDeclaration, ExportAllDeclaration'(
        node: ImportDeclaration | ExportAllDeclaration,
      ) {
        const source = node.source.value

        if (typeof source === 'string' && RE_EXTENSIONS.test(source)) {
          context.report({
            node,
            messageId: 'wrongExtensionImport',
            fix: (fixer) => {
              return fixer.replaceText(
                node.source,
                `'${source.split('.').slice(0, -1).join('.')}'`,
              )
            },
          })
        }
      },
    }
  },
}
