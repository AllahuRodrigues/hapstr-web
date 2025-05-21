import { FlatConfig } from "eslint";

const config = /** @type {FlatConfig} */ ({
  ignores: ["node_modules", ".next", "out"],
  plugins: { "unused-imports": require("eslint-plugin-unused-imports") },
  languageOptions: {
    parser: "@typescript-eslint/parser",
    parserOptions: { project: "./tsconfig.json", sourceType: "module" },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "unused-imports/no-unused-imports": "error",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  settings: { react: { version: "detect" } },
});

export default config;
