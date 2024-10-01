import styled from 'styled-components';
import header from '../../assets/images/blockHeader.svg';
import headerRules from '../../assets/images/blockHeaderRules.svg';
import { useSizeRatio } from '../../contexts/SizeRatioContext';

const Wrapper = styled.div`
    position: relative;
    background: #E4E4EF;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({$ratio}) => $ratio * 10}px ${({$ratio}) => $ratio * 20}px ${({$ratio}) => $ratio * 40}px;
    border-radius: 0 0 ${({$ratio}) => $ratio * 30}px ${({$ratio}) => $ratio * 30}px;
    width: ${({$ratio}) => $ratio * 315}px;
    text-align: center;
    white-space: pre-line;
    font-weight: 400;
    border-top: 3px solid #E4E4EF;
`;

const Header = styled.div`
    position: absolute;
    top: ${({$ratio, $isRules}) => $ratio * ($isRules ? -38 : -30)}px;
    left: 0;
    z-index: 2;
    width: ${({$ratio}) => $ratio * 315}px;
    height: ${({$ratio, $isRules}) => $ratio * ($isRules ? 40 : 30)}px;
    background: url(${({$isRules}) => $isRules ? headerRules : header}) no-repeat 0 0 / contain;
`;

const Back = styled.div`
    position: absolute;
    top: ${({$ratio}) => $ratio * -19}px;
    height: ${({$ratio}) => $ratio * 8}px;
    width: 50%;
    left: 50%;
    transform: translateX(-50%);
    background: #CAC5F9;
`;

export const Block = ({isRules, ...props}) => {
    const ratio = useSizeRatio();

    return (
        <Wrapper {...props} $ratio={ratio}>
            <Header $ratio={ratio} $isRules={isRules}/>
            <Back $ratio={ratio}/>
            {props.children}
        </Wrapper>
    )
}
