const { configure, presets } = require('eslint-kit')

module.exports = {
  ...configure({
    root: __dirname,
    extends: '../../.eslintrc.cjs',
    presets: [presets.typescript({
      tsconfig: './tsconfig.app.json',
    })]
  }),
  overrides: [
    {
      files: ["./src/PWABadge.tsx"],
      rules: {
        "import-x/no-unresolved": "off",
        "import-x/no-default-export": "off"
      }
    },
    {
      files: ["./src/lib/api/**"],
      rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-namespace": "off"
      }
    }
  ]
}