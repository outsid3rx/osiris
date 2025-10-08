const { configure, presets } = require("eslint-kit");

module.exports = configure({
  presets: [
    presets.node(),
    presets.typescript(),
    presets.imports({
      sort: {
        newline: true,
      },
    }),
    presets.prettier({
      semi: false,
      singleQuote: true,
      tabWidth: 2,
      quoteProps: "consistent",
    }),
  ]
});
