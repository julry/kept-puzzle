import styled from 'styled-components';
import header from '../../assets/images/blockHeader.svg';
import headerRules from '../../assets/images/blockHeaderRules.svg';
import { useSizeRatio } from '../../contexts/SizeRatioContext';

const BlockWrapper = styled.div`
    position: relative;
`;

const Wrapper = styled.div`
    background: #E4E4EF;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({$ratio, $isRules}) => $ratio * ($isRules ? 48 : 40)}px ${({$ratio}) => $ratio * 20}px ${({$ratio}) => $ratio * 40}px;
    border-radius: ${({$ratio}) => $ratio * 30}px;
    width: ${({$ratio}) => $ratio * 315}px;
    text-align: center;
    white-space: pre-line;
    font-weight: 400;
    border-top: 3px solid #E4E4EF;
    flex-direction: column;
    clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%, 75% 0%, 75% ${({$ratio}) => $ratio * 20}px, 25% ${({$ratio}) => $ratio * 20}px, 25% 0%);
`;

const Header = styled.div`
    position: absolute;
    top: 0;
    left: ${({$ratio}) => $ratio * 30}px;
    right: ${({$ratio}) => $ratio * 30}px;
    z-index: 2;
    height: ${({$ratio, $isRules}) => $ratio * ($isRules ? 40 : 30)}px;
    background: url(${({$isRules}) => $isRules ? headerRules : header}) no-repeat 0 0 / contain;
`;

export const Block = ({isRules, ...props}) => {
    const ratio = useSizeRatio();

    return (
        <BlockWrapper>
            <Header $ratio={ratio} $isRules={isRules}/>
            <Wrapper $ratio={ratio} $isRules={isRules}  {...props}>
                {props.children}
            </Wrapper>
        </BlockWrapper>
        
    )
}
