import React, { ReactElement } from 'react';
import { StyledContainer, StyledTitle, StyledItem } from './style';
import { IMarkdownHeading } from 'src/interfaces/IMarkdownHeading';

interface ISummaryProps {
	headings: IMarkdownHeading[];
}

/**
 * The Summary component.
 * @param {ISummaryProps} props - The props.
 */
const Summary = (props: ISummaryProps): ReactElement | null => {
    if (!props.headings?.length) return null;
    
    return (
        <StyledContainer>
            <StyledTitle>Summary</StyledTitle>
            {props.headings.map((heading): ReactElement => (
                <StyledItem key={heading.title} onClick={onClick}>
                    {heading.title}
                </StyledItem>
            ))}
        </StyledContainer>
    );
};

/**
 * The onClick handler.
 * @param {React.MouseEvent} e - The event.
 */
const onClick = (e: React.MouseEvent): void => {
    const content = (e.target as HTMLDivElement).innerHTML;
    console.log(content);
};

export {
    Summary
};