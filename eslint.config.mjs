import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      "no-undef": "error",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
    rules: {
      "no-undef": "error",
      "no-sparse-arrays": "off",
      "no-unused-vars": ["warn", { args: "none" }],
    },
  },
]);
