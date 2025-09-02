import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import bg from "../../assets/images/intro-bg.svg";
import {reachMetrikaGoal} from "../../utils/reachMetrikaGoal";
import { useProgress } from "../../contexts/ProgressContext";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { Block } from "../shared/Block";
import { Button } from "../shared/Button";
import { FlexWrapper } from "../shared/FlexWrapper";

const Wrapper = styled(FlexWrapper)`
    position: relative;
    padding: ${({$ratio}) => $ratio * 30}px;
    background: url(${bg}) no-repeat center 0 / cover;
    justify-content: center;
`;

const BlockStyled = styled(Block)`
    position: relative;
    z-index: 2;
    margin-bottom: ${({$ratio}) => $ratio * 12}px;

    & p {
        font-size: ${({$ratio}) => $ratio * 18}px;
    }
`;

const Logo = styled.img`
    position: absolute;
    top: ${({$ratio}) => $ratio * 30}px;
    left: 50%;
    transform: translateX(-50%);
    width: ${({$ratio}) => $ratio * 71}px;
    height: ${({$ratio}) => $ratio * 31}px;
    object-fit: contain;
    z-index: 3;
`;

const ButtonStyled = styled(Button)`
    max-width: ${({$ratio}) => $ratio * 315}px;
`;

export const Intro = () => {
    const ratio = useSizeRatio();
    const {next} = useProgress();

    const handleNext = () => {
        reachMetrikaGoal('start');
        window._tmr?.push({ type: 'reachGoal', id: 3513386, goal: 'start'});
        next();
    }

    return (
        <Wrapper $ratio={ratio}>
            <Logo src={logo} alt="" $ratio={ratio}/>
            <BlockStyled  $ratio={ratio}>
                <p>
                    Реши головоломки{'\n'}от компании Kept, узнай, в чем секрет достижения крутых результатов на работе, и выиграй призы!
                </p>
            </BlockStyled>
            <ButtonStyled onClick={handleNext}>далее</ButtonStyled>
        </Wrapper>
    )
}