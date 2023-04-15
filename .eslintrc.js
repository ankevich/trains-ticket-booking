module.exports = {
    root: true,
    plugins: ["react-hooks"],
    extends: ["react-app", "eslint:recommended", "plugin:react-hooks/recommended"],
    rules: {
        "no-shadow": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "off",
        curly: "error",
        "no-duplicate-imports": "error",
        "no-empty": "error",
        "no-eval": "error",
        "no-case-declarations": "off",
        "no-return-await": "error",
        "sort-imports": [
            "error",
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
                ignoreMemberSort: true,
                memberSyntaxSortOrder: ["all", "multiple", "single", "none"],
                allowSeparatedGroups: true,
            },
        ],
        quotes: ["error", "double", { allowTemplateLiterals: true, avoidEscape: true }],
    },
}
