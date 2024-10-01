import { useRef, useState } from "react";
import styled from "styled-components";
import { useProgress } from "../../../contexts/ProgressContext";
import { useSizeRatio } from "../../../contexts/SizeRatioContext";
import { findPlacedCells } from "../../../utils/findPlacedCells";
import { GameWrapper } from "../../shared/GameWrapper";
import { PuzzleField } from "../../shared/PuzzleField";
import { initialPuzzles, initialPlaced } from "./initialPuzzles";
import { boardPic } from "./assets";
import { Shining } from "../../shared/Shining";

const Picture = styled.img`
    position: absolute;
    z-index: 2;
    width: ${({$ratio}) => $ratio * 180}px;
    height: ${({$ratio}) => $ratio * 286}px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: contain;
`;

const ROWS = 18;
const COLUMNS = 12;

const ShiningStyled = styled(Shining)`
    opacity: ${({$ready}) => $ready ? 1 : 0};
    background: radial-gradient(50% 50% at 50% 50%, #7740FF 0%, rgba(119, 64, 255, 0) 100%);
`;

export const Game3 = () => {
    const [emptyPuzzles, setEmptyPuzzles] = useState(initialPuzzles);
    const [isWin, setIsWin] = useState(false);
    const { next } = useProgress();
    
    const puzzles = useRef({
        shownPuzzles: [],
        placedCells: initialPlaced,
    });

    const ratio = useSizeRatio();

    const handleDrop = (puzzle, x, y, {isSligtlyRight, isSligtlyUp, isMoreUp}) => {
        let dropX = x;
        let dropY = y;
        let placedPuzzles = [];

        if (x === 0) {
            dropX = 1;
        }

        if (x === 11) {
            dropX = 10;
        }

        if (y === 0) {
            dropY = 1;
        }

        if (y === 17) {
            dropY = 16;
        }

        if (x + puzzle.sizeX + 1 > COLUMNS) dropX = COLUMNS - puzzle.sizeX - 1;
        if (y + puzzle.sizeY + 1 > ROWS) dropY = ROWS - puzzle.sizeY - 1;
        
        if (puzzle.correctX?.includes(dropX - 1)) dropX = dropX - 1;
        if (puzzle.correctX?.includes(dropX + 1)) dropX = dropX + 1;
        if (puzzle.correctY?.includes(dropY + 1)) dropY = dropY + 1;
        if (puzzle.correctY?.includes(dropY - 1)) dropY = dropY - 1;

        if (puzzle.isOnlyPosition) {
            if (puzzle.correctX?.includes(dropX - 2)) dropX = dropX - 2;
            if (puzzle.correctX?.includes(dropX + 2)) dropX = dropX + 2;
            if (puzzle.correctY?.includes(dropY + 2)) dropY = dropY + 2;
            if (puzzle.correctY?.includes(dropY - 2)) dropY = dropY - 2;
            if (!puzzle.correctX?.includes(dropX) || !puzzle.correctY?.includes(dropY)) return;
        }
        
        const {isEmpty, placed} = findPlacedCells(dropX, dropY, puzzle, puzzles.current.placedCells);

        if (isEmpty) {
            placedPuzzles = [...placed];
        }

        if (!isEmpty) {
            let isSomeEmpty = false;
            if (dropY + 1 <= ROWS - puzzle.sizeY) {
                const {isEmpty: isEmptyDown, placed: placedDown} = 
                    findPlacedCells(dropX, dropY + 1, puzzle, puzzles.current.placedCells);

                isSomeEmpty = isEmptyDown;
                placedPuzzles = [...placedDown];
                if (isSomeEmpty) dropY = dropY + 1;
            } 

            if ((!isSomeEmpty) && dropX + 1 <= COLUMNS - puzzle.sizeX) {
                const {isEmpty: isEmptyRight, placed: placedRight} = 
                    findPlacedCells(dropX + 1, dropY, puzzle, puzzles.current.placedCells);
                isSomeEmpty = isEmptyRight;
                placedPuzzles = [...placedRight];
                if (isSomeEmpty) dropX = dropX + 1;
            }

            if (!isSomeEmpty) return;
        } 

        const shownIndex = puzzles.current.shownPuzzles.findIndex(({id}) => id === puzzle.id);

        const newPuz = {
                ...puzzle, 
                top: dropY, 
                left: dropX,
                positionX: dropX,
                positionY: dropY,
            };

        if (shownIndex !== -1) {
            puzzles.current.shownPuzzles[shownIndex] = newPuz;
            puzzles.current.placedCells = puzzles.current.placedCells.filter(({id}) => id !== puzzle.id);
        } else {
            puzzles.current.shownPuzzles.push(newPuz);
        }

        setEmptyPuzzles((prev) => prev.filter(({id}) => id !== puzzle.id));

        puzzles.current.placedCells.push(...placedPuzzles);

       if (puzzles.current.shownPuzzles.length === initialPuzzles.length) {
            const correctLength = puzzles.current.shownPuzzles.filter(({positionY, positionX, correctX, correctY }) => 
                ((!correctX || correctX.includes(positionX)) && (!correctY || correctY.includes(positionY)))
            ).length;

        if (correctLength === puzzles.current.shownPuzzles.length){
            setIsWin(true);
            setTimeout(() => next(), 600);
        }
       }
    }

    const handleReturn = (puzzle) => {
        if (!puzzles.current.shownPuzzles.find(({id}) => id === puzzle.id)) return;
        puzzles.current.placedCells = puzzles.current.placedCells.filter(({id}) => id !== puzzle.id);
        puzzles.current.shownPuzzles = puzzles.current.shownPuzzles.filter(({id}) => id !== puzzle.id);
        
        setEmptyPuzzles((prev) => prev.find(({id}) => puzzle.id === id) ? prev : [...prev, puzzle]);
    }

    const handleRestart = () => {
        puzzles.current = {
            shownPuzzles: [],
            placedCells: initialPlaced,
        }

        setEmptyPuzzles(initialPuzzles);
    }

    return (
        <GameWrapper
            level={3} 
            onDrop={handleReturn}
            onRestart={handleRestart}
            emptyPuzzles={emptyPuzzles}
            fieldSize={[216, 324]}
        >
            <ShiningStyled $ready={isWin} />
            <Picture src={boardPic} alt={""} $ratio={ratio}/>
            <PuzzleField 
                cellSize={18}
                width={216} 
                height={324} 
                rows={ROWS}
                columns={COLUMNS}
                moveDump={-2}
                onDrop={handleDrop}
                shownPuzzles={puzzles.current.shownPuzzles}
            />
        </GameWrapper>
    )
}