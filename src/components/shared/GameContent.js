import styled from "styled-components";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { FlexWrapper } from "./FlexWrapper";
import { DropArea } from "./DropArea";

const Wrapper = styled(FlexWrapper)`
    position: relative;
    flex-grow: 1;
    height: auto;
    justify-content: center;
`;

export const GameContent = ({ onDrop, children, isWin, fieldSize }) => {
    const ratio = useSizeRatio();

    return (
        <Wrapper>
            <DropArea position={'top: 0'} size={fieldSize[1] * ratio} isHorizontal onDrop={onDrop}/>
            <DropArea position={'bottom: 0'} size={fieldSize[1] * ratio} isHorizontal onDrop={onDrop}/>
            <DropArea position={'left: 0'} size={fieldSize[0] * ratio} onDrop={onDrop}/>
            <DropArea position={'right: 0'} size={fieldSize[0] * ratio} onDrop={onDrop}/>
            {children}
        </Wrapper>
    )
}