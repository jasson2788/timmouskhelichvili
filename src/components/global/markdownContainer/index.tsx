import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { 
    StyledContainer, StyledMetaData, StyledTitle, StyledSocialMediaContainer, StyledMarkdownContainer, StyledSummaryContainer 
} from './style';
import { SocialMedias } from 'src/components/global/markdownContainer/components/socialMedias';
import { CustomMDX } from 'src/components/global/markdownContainer/components/mdxRemote';
import { Summary } from 'src/components/global/markdownContainer/components/summary';
import { IMarkdownArticleProps } from 'src/interfaces/IMarkdownArticleProps';
import { Seo } from 'src/components/global/seo';
import { getAuthor, getDate } from 'src/utils';

interface IMarkdownContainerProps extends IMarkdownArticleProps {
	hasAmp?: boolean;
}
/**
 * The MarkdownContainer component. 
 * @param {IMarkdownContainerProps} props - The props.
 */
const MarkdownContainer = (props: IMarkdownContainerProps): ReactElement => {
    const router = useRouter();
    const author = getAuthor(props.author);
    const date = getDate(props.date, router.locale);

    return (
        <>
            <StyledMarkdownContainer>
                <StyledTitle title={props.title} />
                <StyledMetaData>{author} • {date}</StyledMetaData>
                <Seo {...props} />
            </StyledMarkdownContainer>
            <StyledContainer>
                <StyledSocialMediaContainer>
                    <SocialMedias />
                </StyledSocialMediaContainer>
                <StyledMarkdownContainer>
                    <CustomMDX source={props.source} />
                </StyledMarkdownContainer>
                <StyledSummaryContainer>
                    <Summary headings={props.headings} />
                </StyledSummaryContainer>
            </StyledContainer>
        </>
    );
};

export {
    MarkdownContainer
};