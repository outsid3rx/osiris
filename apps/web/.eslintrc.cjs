const { configure, presets } = require("eslint-kit");

module.exports = {
  ...configure({
    root: __dirname,
    extends: "../../.eslintrc.cjs",
    presets: [
      presets.react(),
      presets.typescript({
        tsconfig: "./tsconfig.app.json",
      }),
    ]
  }),
  overrides: [
    {
      files: ['./src/**/*.{ts,tsx}'],
      rules: {
        "import-x/no-default-export": "off",
      },
    },
    {
      files: ["./src/**/*.tsx"],
      rules: {
        "react/jsx-no-bind": "off",
      },
    },
    {
      files: ["./src/PWABadge.tsx"],
      rules: {
        "import-x/no-unresolved": "off"
      },
    },
    {
      files: ["./src/shared/api/api.ts"],
      rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-namespace": "off",
        "import-x/no-unresolved": "off",
      },
    },
  ],
};
