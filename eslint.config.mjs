import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignorePatterns: ["**/*"], // This ignores all files
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
      },
    },
    // Empty rules means nothing will be linted
    rules: {},
  },
];

export default eslintConfig;
