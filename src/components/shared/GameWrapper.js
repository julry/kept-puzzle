import styled from "styled-components";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { MouseTransition, TouchTransition, DndProvider } from 'react-dnd-multi-backend';
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useState } from "react";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { Header } from "./Header";
import { Rules } from "./Rules";
import { RoundButton } from "./Button";
import { FlexWrapper } from "./FlexWrapper";
import { GameContent } from "./GameContent";
import { StartPuzzle } from "./StartPuzzle";

const Wrapper = styled(FlexWrapper)`
    padding: ${({$ratio}) => $ratio * 30}px 0;
`;

const ReloadBtn = styled(RoundButton)`
    margin-top: auto;
    height: ${({$ratio}) => $ratio * 50}px;
    width: ${({$ratio}) => $ratio * 50}px;
    background: #A39CFF;

    & svg {
        height: ${({$ratio}) => $ratio * 24}px;
        width: ${({$ratio}) => $ratio * 24}px;
    }
`;

const SWITCH_DURATION = 500;

const SWITCH_NAME = 'switch';

const TransitionWrapper = styled.div`
    width: 100%;
    height: 100%;

    &.${SWITCH_NAME}-enter {
        opacity: 0;
    }

    &.${SWITCH_NAME}-enter-active {
        opacity: 1;
        transition: opacity ${SWITCH_DURATION}ms;
    }

    &.${SWITCH_NAME}-exit {
        opacity: 1;
    }

    &.${SWITCH_NAME}-exit-active {
        opacity: 0;
        transition: opacity ${SWITCH_DURATION}ms;
    }
`

export const GameWrapper = ({level, children, emptyPuzzles = [], isFirstRules, isWin, onDrop, onRestart}) => {
    const [isFirstShown, setIsFirstShown] = useState(isFirstRules);
    const [isRules, setIsRules] = useState(isFirstRules);
    const ratio = useSizeRatio();

    const handleCloseRules = () => {
        if (isFirstShown) setIsFirstShown(false);

        setIsRules(false);
    }

    const HTML5toTouch = {
        backends: [
            {
                id: 'html5',
                backend: HTML5Backend,
                transition: MouseTransition,
            },
            {
                id: 'touch',
                backend: TouchBackend,
                preview: true,
                transition: TouchTransition,
            },
        ],
    };

    return (
        <SwitchTransition mode='out-in'>
             <CSSTransition key={`transition_${isRules}`} timeout={SWITCH_DURATION} classNames={SWITCH_NAME}>
                <TransitionWrapper>
                    {isRules ? <Rules onClose={handleCloseRules} isFirstRules={isFirstShown}/> : (
                        <DndProvider options={HTML5toTouch}>
                            <Wrapper $ratio={ratio}>
                                <Header level={level} onClickRules={() => setIsRules(true)}/>
                                <GameContent onDrop={onDrop} isWin={isWin}>
                                {emptyPuzzles.map((puz) => (
                                    <StartPuzzle 
                                        key={puz.id}
                                        puz={puz}
                                    />
                                ))}
                                </GameContent>
                                {children}
                                <ReloadBtn $ratio={ratio} onClick={onRestart}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.44444 16.3333C3.00692 17.4691 3.78363 18.4856 4.72359 19.3333C6.55851 20.9882 9.01557 22 11.7157 22C17.3955 22 22 17.5229 22 12C22 6.47718 17.3955 2.00004 11.7157 2.00004C9.98228 2.00004 8.34906 2.41701 6.91631 3.15343C5.3205 3.97365 3.97338 5.19017 3.01353 6.6682M3.01353 6.6682L2 2M3.01353 6.6682L6.91631 7.84336" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                                    </svg>
                                </ReloadBtn>
                            </Wrapper>    
                        </DndProvider>
                    )}
                </TransitionWrapper>
            </CSSTransition>
        </SwitchTransition>
    )
}