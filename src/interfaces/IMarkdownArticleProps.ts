interface IMarkdownArticleProps {
	source: {
		compiledSource: string;
		source: string;
	};
	title: string;
	href: string;
	description?: string;
	date?: string;
	author?: string;
	openGraphImage?: string;
}

export type {
    IMarkdownArticleProps
};