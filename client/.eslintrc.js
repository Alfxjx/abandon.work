module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ["plugin:vue/strongly-recommended", "eslint:recommended"],
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "off" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"vue/singleline-html-element-content-newline": 0,
		"vue/max-attributes-per-line": 0,
		"vue/html-indent": 0,
		"vue/name-property-casing": 0,
		"vue/require-prop-types": 0,
		"vue/html-self-closing": 0,
	},
	parserOptions: {
		parser: "babel-eslint",
	},
};
