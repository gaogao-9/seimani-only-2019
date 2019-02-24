const isDev = process.env.NODE_ENV === "development";

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "@nuxtjs",
  ],
  // add your custom rules here
  rules: {
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "arrow-parens": ["error", "always"],
    "no-console": [isDev ? "off" : "error"],
    "promise/param-names": "off",
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never",
    }],
    "vue/max-attributes-per-line": ["error", {
      "singleline": 8,
      "multiline": {
        "max": 1,
        "allowFirstLine": true,
      },
    }],
    "vue/attribute-hyphenation": ["error", "always", {
      "ignore": [
        "attributeName",
        "repeatCount",
      ],
    }],
  },
};
