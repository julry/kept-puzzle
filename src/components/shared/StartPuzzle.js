import styled from "styled-components";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { Puzzle } from "./Puzzle";

export const Wrapper = styled(Puzzle)`
    position: absolute;
    z-index: 11;
    left: ${({$left}) => $left ?? 'auto'};
    right: ${({$right}) => $right ?? 'auto'};
    top: ${({$top}) => $top ?? 'auto'};
    bottom: ${({$bottom}) => $bottom ?? 'auto'};
    transform: rotate(${({$rotation}) => $rotation}deg);
`;


export const StartPuzzle = ({puz}) => {
    const ratio = useSizeRatio();

    const { startPuz } = puz;
    const { left, top, right, bottom, rotation } = startPuz;

    return (
        <Wrapper 
            size={18}
            $left={left ? left * ratio + 'px' : undefined} 
            $top={top ? top * ratio + 'px': undefined}
            $right={right ? right * ratio + 'px' : undefined} 
            $bottom={bottom ? bottom * ratio + 'px' : undefined} 
            $rotation={rotation} 
            puzzle={puz} 
            isStartPuzzle
        />
    )
}