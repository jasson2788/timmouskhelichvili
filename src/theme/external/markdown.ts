const markdownTheme = `
	code[class*="language-"],
	pre[class*="language-"] {
		color: #839496;
		text-shadow: 0 1px rgba(0, 0, 0, 0.3);
		direction: ltr;
		text-align: left;
		white-space: pre;
		word-spacing: normal;
		word-break: normal;
		line-height: 1.5;

		-moz-tab-size: 4;
		-o-tab-size: 4;
		tab-size: 4;

		-webkit-hyphens: none;
		-moz-hyphens: none;
		-ms-hyphens: none;
		hyphens: none;
	}

	/* Code blocks */
	pre[class*="language-"] {
		padding: 1em;
		margin: .5em 0;
		overflow: auto;
		border-radius: 0.3em;
	}

	:not(pre) > code[class*="language-"],
	pre[class*="language-"] {
		background: #002b36;
	}

	/* Inline code */
	:not(pre) > code[class*="language-"] {
		padding: .1em;
		border-radius: .3em;
	}

	.token.comment,
	.token.prolog,
	.token.doctype,
	.token.cdata {
		color: #586e75;
	}

	.token.punctuation {
		color: #93a1a1;
	}

	.namespace {
		opacity: .7;
	}

	.token.property,
	.token.keyword,
	.token.tag {
		color: #268bd2;
	}

	.token.class-name {
		color: #FFFFB6;
		text-decoration: underline;
	}

	.token.boolean,
	.token.constant {
		color: #b58900;
	}

	.token.symbol,
	.token.deleted {
		color: #dc322f;
	}

	.token.number {
		color: #859900;
	}

	.token.selector,
	.token.attr-name,
	.token.string,
	.token.char,
	.token.builtin,
	.token.inserted {
		color: var(--colors-primary);
	}

	.token.variable {
		color: #268bd2;
	}

	.token.operator {
		color: #EDEDED;
	}

	.token.function {
		color: #268bd2;
	}

	.token.regex {
		color: #E9C062;
	}

	.token.important {
		color: #fd971f;
	}

	.token.entity {
		color: #FFFFB6;
		cursor: help;
	}

	.token.url {
		color: #96CBFE;
	}

	.language-css .token.string,
	.style .token.string {
		color: #87C38A;
	}

	.token.important,
	.token.bold {
		font-weight: bold;
	}

	.token.italic {
		font-style: italic;
	}

	.token.atrule,
	.token.attr-value {
		color: #F9EE98;
	}
`;

export {
    markdownTheme
};