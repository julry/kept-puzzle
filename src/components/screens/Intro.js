import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import bg from "../../assets/images/intro-bg.svg";
import start from "../../assets/images/intro-puz.svg";
import {reachMetrikaGoal} from "../../utils/reachMetrikaGoal";
import { useProgress } from "../../contexts/ProgressContext";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { Block } from "../shared/Block";
import { Button } from "../shared/Button";
import { FlexWrapper } from "../shared/FlexWrapper";

const Wrapper = styled(FlexWrapper)`
    padding: ${({$ratio}) => $ratio * 30}px 0;
    background: url(${bg}) no-repeat center 0 / cover;
`;

const Picture = styled.img`
    position: absolute;
    width: 100%;
    height: auto;
    object-fit: cover;
    top:  ${({$ratio}) => $ratio * 19}px;
    left: 0;

    @media screen and (max-width: 380px) and (max-height: 700px) {
        top: 0;
    }
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
    width: ${({$ratio}) => $ratio * 71}px;
    height: ${({$ratio}) => $ratio * 31}px;
    object-fit: contain;
    position: relative;
    z-index: 3;
`;

const Content = styled.div`
    margin-top: auto;
    padding: 0 ${({$ratio}) => $ratio * 30}px;
`;

const ButtonStyled = styled(Button)`
    margin-top: auto;
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
        <Wrapper  $ratio={ratio}>
            <Logo src={logo} alt="" $ratio={ratio}/>
            <Picture $ratio={ratio} src={start}/>
            <Content $ratio={ratio}>
                <BlockStyled  $ratio={ratio}>
                    <p>
                        Реши головоломки{'\n'}от компании Kept, узнай, в чем секрет достижения крутых результатов на работе, и выиграй призы!
                    </p>
                </BlockStyled>
                <ButtonStyled onClick={handleNext}>далее</ButtonStyled>
            </Content>
        </Wrapper>
    )
}