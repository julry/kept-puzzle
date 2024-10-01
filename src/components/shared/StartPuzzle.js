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
    transition: width 0.3s, height 0.3s, transform 0.3s;
`;

export const StartPuzzle = ({puz, onClick, clicked}) => {
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
            $rotation={clicked === puz.id ? 0 : rotation} 
            puzzle={puz} 
            isStartPuzzle
            onClick={onClick}
            clicked={clicked === puz.id}
        />
    )
}