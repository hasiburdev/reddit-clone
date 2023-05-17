module.exports = {
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  arrowParens: "always",
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^@/components/(.*)$",
    "^@/hooks/(.*)$",
    "^@/atoms/(.*)$",
    "^@/firebase/(.*)$",
    "^@/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
};
