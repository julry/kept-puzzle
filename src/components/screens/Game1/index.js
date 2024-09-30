import { useRef, useState } from "react";
import styled from "styled-components";
import { boardPic } from './assets';
import { useSizeRatio } from "../../../contexts/SizeRatioContext";
import { useProgress } from "../../../contexts/ProgressContext";
import { GameWrapper } from "../../shared/GameWrapper";
import { PuzzleField } from "../../shared/PuzzleField";
import { Shining } from "../../shared/Shining";
import { initialPuzzles } from "./initialPuzzles";

const Picture = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: ${({$ratio}) => $ratio * 180}px;
    height: ${({$ratio}) => $ratio * 288}px;
    object-fit: contain;
`;

const ROWS = 18;
const COLUMNS = 12;

const ShiningStyled = styled(Shining)`
    opacity: ${({$ready}) => $ready ? 1 : 0};
`;

export const Game1 = () => {
    const [emptyPuzzles, setEmptyPuzzles] = useState(initialPuzzles);
    const [isWin, setIsWin] = useState(false);
    const { next } = useProgress();
    
    const puzzles = useRef({
        shownPuzzles: [],
        placedCells: [],
    });

    const ratio = useSizeRatio();

    const handleDrop = (puzzle, x, y) => {
        let dropX = x;
        let dropY = y;
        let placedPuzzles = [];
        if (x === 0) {
            dropX = 1;
        }

        if (x === 17) {
            dropX = 16;
        }

        if (y === 0) {
            dropY = 1;
        }

        if (y === 17) {
            dropY = 16;
        }

        if (dropX + puzzle.sizeX > COLUMNS) dropX = COLUMNS - puzzle.sizeX;
        if (dropY + puzzle.sizeY > ROWS) dropY = ROWS - puzzle.sizeY;
        
        if (puzzle.correctX?.includes(dropX - 1)) dropX = dropX -1;
        if (puzzle.correctX?.includes(dropX + 1)) dropX = dropX + 1;
        if (puzzle.correctY?.includes(dropY + 1)) dropY = dropY + 1;
        if (puzzle.correctY?.includes(dropY - 1)) dropY = dropY - 1;
        if (!puzzle.correctX?.includes(dropX) || !puzzle.correctY?.includes(dropY)) return;

        const shownIndex = puzzles.current.shownPuzzles.findIndex(({id}) => id === puzzle.id);
       
        let newPuz = {...puzzle, top: dropY, left: dropX};

        if (puzzle.id === 6 || puzzle.id === 7) {
            if (puzzles.current.shownPuzzles.find(({left}) => left === dropX)) return;
            if (dropX === 6) newPuz = {...newPuz, xPosition: '100%'};
            else newPuz = {...newPuz, xPosition: '0'};
        }

        if (shownIndex !== -1) {
            puzzles.current.shownPuzzles[shownIndex] = newPuz;
            puzzles.current.placedCells = puzzles.current.placedCells.filter(({id}) => id !== puzzle.id);
        } else {
            puzzles.current.shownPuzzles.push(newPuz);
        }

        setEmptyPuzzles((prev) => prev.filter(({id}) => id !== puzzle.id));

        puzzles.current.placedCells.push(...placedPuzzles);

       if (puzzles.current.shownPuzzles.length === initialPuzzles.length) {
            const correctLength = puzzles.current.shownPuzzles.filter(({top, left, correctX, correctY }) => 
                ((!correctX || correctX.includes(left)) && (!correctY || correctY.includes(top)))
            ).length
            if (correctLength === puzzles.current.shownPuzzles.length) {
                setIsWin(true);
                setTimeout(() => next(), 600);
            }
       }
    }

    const handleReturn = (puzzle) => {
        puzzles.current.placedCells = puzzles.current.placedCells.filter(({id}) => id !== puzzle.id);
        puzzles.current.shownPuzzles = puzzles.current.shownPuzzles.filter(({id}) => id !== puzzle.id);
        
        setEmptyPuzzles((prev) => [...prev, puzzle]);
    }

    const handleRestart = () => {
        puzzles.current = {
            shownPuzzles: [],
            placedCells: [],
        }
        setEmptyPuzzles(initialPuzzles);
    }

    return (
        <GameWrapper
            level={1} 
            isFirstRules
            onDrop={handleReturn}
            onRestart={handleRestart}
            emptyPuzzles={emptyPuzzles}
            isWin={isWin}
        >
            <ShiningStyled $ready={isWin} />
            <Picture src={boardPic} alt={""} $ratio={ratio}/>
            <PuzzleField 
                cellSize={18}
                width={216} 
                height={324} 
                isWin={isWin}
                rows={ROWS} 
                columns={COLUMNS} 
                onDrop={handleDrop}
                shownPuzzles={puzzles.current.shownPuzzles}
            />
        </GameWrapper>
    )
}