import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import Masonry from 'react-masonry-css';
import { StyledMetaData, StyledTitle, StyledEmpty, StyledContainer, StyledArticleContainer } from './style';
import { IMarkdownArticleProps } from 'src/interfaces/IMarkdownArticleProps';
import { MyLink } from 'src/components/elements/link';
import { getAuthor, getDate } from 'src/utils';
import { useLocale } from 'src/localizations';
import { CustomImage } from 'src/components/elements/customImage';
import { devices } from 'src/theme';

interface IArticlesProps {
	articles: IMarkdownArticleProps[];
}

/**
 * The Articles component. 
 * @param {IArticlesProps} props - The props.
 */
const Articles = (props: IArticlesProps): ReactElement => {
    const locale = useLocale();
    const router = useRouter();
	
    if (!props.articles.length) {
        return <StyledEmpty>{locale.pages.blog.empty}</StyledEmpty>;
    }

    return (
        <StyledContainer>
            <Masonry 
                breakpointCols={{
                    [devices.smallTablet]: 1,
                    default: 2
                }}
                className={'masonry-grid'}
                columnClassName={'masonry-grid-column'}>
                {props.articles.map((x, key) => (
                    <div key={key}>
                        {getArticleElement(x, router.locale as string)}
                    </div>
                ))}
            </Masonry>
        </StyledContainer>
    );
};

/**
 * Returns the article element.
 * @param {IMarkdownArticleProps} article - The article.
 * @param {string} locale - The locale.
 */
const getArticleElement = (article: IMarkdownArticleProps, locale: string): ReactElement => {
    const author = getAuthor(article.author);
    const date = getDate(article.date, locale);

    return (
        <StyledArticleContainer>
            {article.openGraphImage 
				&& <CustomImage 
				    src={article.openGraphImage} 
				    width={'100%'} 
				    height={'220px'} 
				    title={article.title} 
				    alt={article.title} />}
            <StyledTitle>
                <MyLink href={article.href}>{article.title}</MyLink>
            </StyledTitle>
            <StyledMetaData>{author} • {date}</StyledMetaData>
        </StyledArticleContainer>
    );
};

export {
    Articles
};