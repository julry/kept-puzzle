import styled from 'styled-components';
// import { useRef } from 'react';
import { useSizeRatio } from '../../contexts/SizeRatioContext';
import {boardPic} from '../screens/Game1/assets';
// import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';
import hand from '../../assets/images/hand.svg';
import { Block } from './Block';
import { Button } from './Button';
import { initialPuzzles } from '../screens/Game1/initialPuzzles';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
    position: absolute;
    inset: 0;
    z-index: 1000;
    background: #531A56;
`;

const Content = styled(Block)`
    position: absolute;
    inset: ${({$ratio}) => $ratio * 30}px;
    top: ${({$ratio}) => $ratio * 67}px;
    padding: ${({$ratio}) => $ratio * 26}px ${({$ratio}) => $ratio * 20}px ${({$ratio}) => $ratio * 20}px;
    flex-direction: column;
    justify-content: space-between;
    font-size:  ${({$ratio}) => $ratio * 14}px;
`;

const RulesWrapper = styled.div`
    position: relative;
    display: flex;
    height: ${({$ratio}) => $ratio * 368}px;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Picture = styled.img`
    z-index: 2;
    /* width: ${({$ratio}) => $ratio * 180}px;
    height: ${({$ratio}) => $ratio * 288}px; 0.66 */ 
    width: ${({$ratio}) => $ratio * 120}px;
    height: ${({$ratio}) => $ratio * 192}px;
    object-fit: contain;
`;

const Hand = styled(motion.img)`
    position: absolute;
    width: ${({$ratio}) => $ratio * 58}px;
    height: ${({$ratio}) => $ratio * 60}px; 
    z-index: 13;
`;

const PuzzleWrapper = styled.div`
    position: absolute;
    width: ${({width}) => width};
    height: ${({height}) => height};
    z-index: 11;
    left: ${({$left}) => $left ?? 'auto'};
    right: ${({$right}) => $right ?? 'auto'};
    top: ${({$top}) => $top ?? 'auto'};
    bottom: ${({$bottom}) => $bottom ?? 'auto'};
    transform: rotate(${({$rotation}) => $rotation}deg);
    background: url(${({src}) => src}) no-repeat ${({$xPosition}) => $xPosition ?? 0} ${({$yPosition}) => $yPosition ?? 0} / contain;
    z-index: 11;
`;


export const Rules = ({onClose, isFirstRules}) => {
    const ratio = useSizeRatio();
    // const block = useRef();
    // const element = useRef();
   
    const handleClose = () => {
        onClose();
    }

    return (
        <Wrapper>
            <Content $ratio={ratio} isRules>
                <p>
                    {'Перетаскивай детали из поля внизу экрана внутрь заданной рамки.\nОни должны заполнить пространство без пробелов.'}
                </p>
                <RulesWrapper $ratio={ratio}>
                    <Picture $ratio={ratio} src={boardPic} alt=""/>
                    {initialPuzzles.map((puz) => (
                        <PuzzleWrapper 
                            key={puz.id}
                            $left={puz.startPuz.left ?  puz.startPuz.left * ratio + 'px' : undefined} 
                            $top={puz.startPuz.top ?  0.66 * puz.startPuz.top * ratio + 'px': undefined}
                            $right={puz.startPuz.right ? puz.startPuz.right * ratio + 'px' : undefined} 
                            $bottom={puz.startPuz.bottom ? puz.startPuz.bottom * ratio + 'px' : undefined} 
                            width={puz.puzzWidth ?  0.66 * puz.puzzWidth * ratio + 'px' : undefined} 
                            height={puz.puzzHeight ?  0.66 * puz.puzzHeight * ratio + 'px' : undefined} 
                            $rotation={puz.startPuz.rotation} 
                            src={puz.src}
                        />
                    ))}
                    <Hand 
                        $ratio={ratio}
                        initial={{bottom: 15 * ratio, left: 95 * ratio}}
                        src={hand} 
                        alt=""
                    /> 
                </RulesWrapper>
                <Button onClick={handleClose}>{isFirstRules ? 'начинаем' : 'понятно'}</Button>
            </Content>
        </Wrapper>
    )
}