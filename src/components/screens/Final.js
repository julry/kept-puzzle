import styled from "styled-components";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import bg from "../../assets/images/bgFinal.svg";
import pic from "../../assets/images/finalImg.svg";
import { reachMetrikaGoal } from "../../utils/reachMetrikaGoal";
import { Block } from "../shared/Block";
import { Button } from "../shared/Button";
import { FlexWrapper } from "../shared/FlexWrapper";

const Wrapper = styled(FlexWrapper)`
    background: url(${bg}) no-repeat 0 0 / cover;
    padding-bottom: ${({$ratio}) => $ratio * 20}px;
`;

const BlockStyled = styled(Block)`
    font-size: ${({$ratio}) => $ratio * 18}px;
    margin: ${({$ratio}) => $ratio * 27}px 0 ${({$ratio}) => $ratio * 30}px;
`;

const ImageStyled = styled.img`
    width: ${({$ratio}) => $ratio * 340}px;
    height: ${({$ratio}) => $ratio * 366}px;
`;

const ButtonStyled = styled(Button)`
    width: ${({$ratio}) => $ratio * 315}px;
`;

export const Final = () => {
    const ratio = useSizeRatio();

    const handleOpenLink = () => {
        // reachMetrikaGoal(metrika);
        window.open('', '_blank');
    }

    return (
        <Wrapper $ratio={ratio} $bg={bg}>
            <ImageStyled $ratio={ratio} src={pic} alt="" />
            <BlockStyled $ratio={ratio}>
                Если ты тоже хочешь достичь новых вершин и узнать больше о карьерных возможностях в Kept,{' '}
                заглядывай в наш телеграм-канал!
            </BlockStyled>
            <ButtonStyled $ratio={ratio} onClick={handleOpenLink}>хочу в Kept</ButtonStyled>
        </Wrapper>
    )
}