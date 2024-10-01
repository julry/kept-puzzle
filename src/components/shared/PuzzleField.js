import mergeRefs from "merge-refs";
import { useRef } from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { Puzzle } from "./Puzzle";

const DropDump = styled.div`
    position: relative;
    z-index: 10;
    margin-top: ${({$move, $ratio}) => $move ? $ratio * $move + 'px' : '0'};
    width: ${({$ratio, width}) => $ratio * width}px;
    height: ${({$ratio, height}) => $ratio * height}px;
`;

const PuzzleStyled = styled(Puzzle)`
    position: absolute;
    top: ${({top}) => top};
    left: ${({left}) => left};
    ${({width}) => width ? 'width: ' + width : ''};
    ${({height}) => height ? 'height: ' + height : ''};
`;

export const PuzzleField = ({ cellSize, width, height, onDrop, shownPuzzles, moveDump, isWin, columns, rows}) => {
    const ratio = useSizeRatio();
    const $wrapper = useRef();
    const cellSizeR = cellSize * ratio;

    const handleDrop = (item, monitor) => {
        if (!$wrapper.current) return;

        let isSligtlyUp = false;
        let isSligtlyRight = false;
        let isMoreUp = false;

        const y = monitor.getSourceClientOffset()?.y - $wrapper.current?.getBoundingClientRect()?.y;
        const x = monitor.getSourceClientOffset()?.x - $wrapper.current?.getBoundingClientRect()?.x;

        const difX = x / cellSizeR;
        const difY = y / cellSizeR;

        let dropX = Math.floor(difX);
        let dropY = Math.floor(difY);

        const difDropX = difX - dropX;
        const difDropY = difY - dropY;

        if (difDropY > 0.55) isSligtlyUp = true;
        if (difDropX > 0.55) isSligtlyRight = true;
        if (difDropY > difDropX) isMoreUp = true;

        if (dropX < 0) dropX = 0;
        if (dropY < 0) dropY = 0;

        onDrop?.(item, dropX, dropY, {isSligtlyRight, isSligtlyUp, isMoreUp});
    };

    const [, drop] = useDrop(() => (
        {
            accept: 'PUZZLE',
            drop: handleDrop,
        }
    ), []);

    return (
        <>
            <DropDump 
                ref={mergeRefs(!isWin ? drop : null, $wrapper)} 
                $ratio={ratio} 
                width={width} 
                height={height} 
                $move={moveDump}    
            >
                {shownPuzzles.map((puzzle) => (
                    <PuzzleStyled 
                        key={`shown_${puzzle.id}`} 
                        puzzle={puzzle} 
                        size={cellSize} 
                        top={puzzle.top * cellSizeR + 'px'} 
                        left={puzzle.left * cellSizeR + 'px'}
                    />
                ))}
            </DropDump>
        </>
        
    )
}