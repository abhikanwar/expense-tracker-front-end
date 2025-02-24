import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    linterOptions: {
      reportUnusedDisableDirectives: "warn",
    },
    languageOptions: {
      globals: globals.browser,
      // parserOptions: {
      //   ecmaFeatures: {
      //     jsx: true
      //   }
      // }
    },
    // settings: {
    //   react: {
    //     version: "detect"
    //   }
    // }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettier,
  {
    rules: {
      // Disable ESLint base rules that conflict with TypeScript
      "no-unused-vars": "off",
      "no-use-before-define": "off",
      "no-shadow": "off",
      "no-array-constructor": "off",
      "no-loop-func": "off",
      "no-redeclare": "off",
      "no-undef": "off", // TypeScript handles this
      "no-empty-function": "off",
      "default-param-last": "off",
      "no-dupe-class-members": "off",
      "no-loss-of-precision": "off",

      // Enable TypeScript-specific versions
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-use-before-define": ["error"],
      "@typescript-eslint/no-shadow": ["error"],
      "@typescript-eslint/no-array-constructor": "error",
      "@typescript-eslint/no-loop-func": "error",
      "@typescript-eslint/no-redeclare": "error",
      "@typescript-eslint/no-empty-function": "warn",
      "@typescript-eslint/default-param-last": "error",
      "@typescript-eslint/no-dupe-class-members": "error",
      "@typescript-eslint/no-loss-of-precision": "error",

      "react/react-in-jsx-scope": "off",
      "no-unexpected-multiline": "warn",
      "no-console": "warn",
      "prefer-const": "error",
    },
  },
];
