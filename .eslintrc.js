module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'camelcase': 'warn',
    "vue/attributes-order": [
      "error",
      {
        "order": [
          "CONDITIONALS",
          "LIST_RENDERING",
          "TWO_WAY_BINDING",
          "RENDER_MODIFIERS",
          "GLOBAL",
          [
            "UNIQUE",
            "SLOT"
          ],
          "OTHER_DIRECTIVES",
          "DEFINITION",
          "OTHER_ATTR",
          "CONTENT",
          "EVENTS"
        ],
        "alphabetical": false
      }
    ],
    "vue/order-in-components": [
      "error",
      {
        "order": [
          "name",
          "delimiters",
          "components",
          "directives",
          "filters",
          "extends",
          "mixins",
          "provide",
          "inject",
          "inheritAttrs",
          [
            "props",
            "propsData"
          ],
          "emits",
          "setup",
          "asyncData",
          "data",
          "model",
          "computed",
          "watch",
          "watchQuery",
          "LIFECYCLE_HOOKS",
          "methods",
          [
            "template",
            "render"
          ],
          "renderError"
        ]
      }
    ],
  },
};
