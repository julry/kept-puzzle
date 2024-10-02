import styled from "styled-components";
import { useProgress } from "../../contexts/ProgressContext";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
// import { reachMetrikaGoal } from "../../utils/reachMetrikaGoal";
import { Block } from "./Block";
import { Button } from "./Button";
import { FlexWrapper } from "./FlexWrapper";

const Wrapper = styled(FlexWrapper)`
    padding: ${({$ratio}) => $ratio * 28}px 0;
    background: url(${({$bg}) => $bg}) no-repeat 0 0 / cover;
`;

const Content = styled(FlexWrapper)`
    align-items: center;
    justify-content: center;
    flex-grow: 1;
`;

const BlockWrapper = styled.div`
    margin-top: auto;
`;

const BlockStyled = styled(Block)`
    font-size: ${({$ratio}) => $ratio * 14}px;
    padding-bottom: ${({$ratio}) => $ratio * 20}px;

    & button {
        margin-top: ${({$ratio}) => $ratio * 40}px;
        width: ${({$ratio}) => $ratio * 275}px;
    }
`;

const LevelWrapper = styled.div`
    display: flex;
    align-items: center;
    border-radius: ${({$ratio}) => $ratio * 30}px;
    font-size: ${({$ratio}) => $ratio * 14}px;
    border: ${({$ratio}) => $ratio * 3}px solid #CAC5F9;
    background: #E4E4EF;
    padding: ${({$ratio}) => $ratio * 4}px ${({$ratio}) => $ratio * 10}px ${({$ratio}) => $ratio * 4}px ${({$ratio}) => $ratio * 4}px;

    & svg {
        margin-right: ${({$ratio}) => $ratio * 11}px;
        width: ${({$ratio}) => $ratio * 20}px;
        height: ${({$ratio}) => $ratio * 20}px;
    }
`;

export const PostGameWrapper = ({level, children, text, bg, metrika, btnText = "далее"}) => {
    const {next} = useProgress();
    const ratio = useSizeRatio();

    const handleNext = () => {
        // reachMetrikaGoal(metrika);
        next();
    }

    return (
        <Wrapper $ratio={ratio} $bg={bg}>
            <LevelWrapper $ratio={ratio}>
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#00DD99"/>
                    <path d="M7.00018 11.0002L10.0002 14.3335L13.0002 5.66687" stroke="white" strokeWidth="2.00008" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>уровень {level} пройден</p>
            </LevelWrapper>
            <Content $ratio={ratio}>
                {children}
            </Content>
            <BlockWrapper>
                <BlockStyled $ratio={ratio}>
                    {text}
                    <Button onClick={handleNext}>{btnText}</Button>
                </BlockStyled>
            </BlockWrapper>
        </Wrapper>
    )
}