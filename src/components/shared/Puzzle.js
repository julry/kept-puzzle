import { useMemo, useRef } from "react";
import mergeRefs from 'merge-refs';
import { DragPreviewImage, useDrag } from "react-dnd"
import { usePreview } from "react-dnd-multi-backend";
import styled from 'styled-components';
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { puzzleSize} from "../../constants/sizes";

const PuzzleWrapper = styled.div`
    position: absolute;
    width: ${({$ratio, width}) => $ratio * width}px;
    height: ${({$ratio, height}) => $ratio * height}px;
    background: url(${({src}) => src}) no-repeat ${({$xPosition}) => $xPosition ?? 0} ${({$yPosition}) => $yPosition ?? 0} / contain;
    z-index: 11;
    transition: width 0.3s, height 0.3s;
    box-shadow: inset 0 0 0 ${({$rectColor}) => $rectColor ? '1px ' + $rectColor : '0'};
`;

const PuzzleStyled = styled(PuzzleWrapper)`
    z-index: 111;
`;

export const Puzzle = ({ className, puzzle, isStartPuzzle, onClick, clicked }) => {
    const ratio = useSizeRatio();
    const $puzzle = useRef();

    const img = puzzle.src;

    const { puzzWidth, puzzHeight, puzzRealWidth, puzzRealHeight, xPosition, yPosition } = puzzle;
    
    const width = useMemo(() => puzzWidth ?? (puzzle.sizeX * puzzleSize), [puzzWidth, puzzle.sizeX]);
    const height = useMemo(() => puzzHeight ?? (puzzle.sizeY * puzzleSize), [puzzHeight, puzzle.sizeY]);

    const shownWidth = isStartPuzzle ? width : puzzRealWidth ?? width;
    const shownHeight = isStartPuzzle ? height : puzzRealHeight ?? height;

    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: "PUZZLE",
        item: () => ({ 
            ...puzzle, 
            initialY: $puzzle.current?.getBoundingClientRect().y,  
            initialX: $puzzle.current?.getBoundingClientRect().x
        }),
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    }), [puzzle]);

    const PuzzlePreview = () => {
        const {display, style} = usePreview();
         
        if (!display) {
            return (
                <DragPreviewImage connect={preview} src={puzzle.src} />
            )
        }

        return (
            <PuzzleStyled 
                ref={preview}
                style={style} 
                $ratio={ratio}  
                width={puzzRealWidth} 
                height={puzzRealHeight} 
                src={puzzle.src}
            />
        );
    };

    if (isDragging) return <PuzzlePreview  />

    return (
        <>
            <PuzzleWrapper 
                ref={mergeRefs($puzzle, isStartPuzzle && img === undefined ? null : drag)} 
                className={className}
                $ratio={ratio}  
                width={clicked ? puzzRealWidth : shownWidth} 
                height={clicked ? puzzRealHeight : shownHeight} 
                $xPosition={xPosition}
                $yPosition={yPosition}
                src={img} 
                onMouseEnter={() => onClick?.(puzzle.id)}
                onMouseLeave={() => onClick?.()}
                $rectColor={puzzle.rectColor}
            />
        </> 
    )
}