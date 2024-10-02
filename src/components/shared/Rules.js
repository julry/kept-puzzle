import styled from 'styled-components';
import { useSizeRatio } from '../../contexts/SizeRatioContext';
import {boardPic, head_left} from '../screens/Game1/assets';
// import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';
import hand from '../../assets/images/hand.png';
import { Block } from './Block';
import { Button } from './Button';
import { initialPuzzles } from '../screens/Game1/initialPuzzles';
import { motion } from 'framer-motion';
import { FlexWrapper } from './FlexWrapper';

const Wrapper = styled(FlexWrapper)`
    position: absolute;
    inset: 0;
    z-index: 1000;
    background: #531A56;
    justify-content: center;
    align-items: center;
    padding: ${({$ratio}) => $ratio * 67}px ${({$ratio}) => $ratio * 30}px ${({$ratio}) => $ratio * 30}px;
`;

const Content = styled(Block)`
    padding-bottom: ${({$ratio}) => $ratio * 20}px;
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

const PuzzAnimated = styled(motion.div)`
    position: absolute;
    background: url(${head_left}) no-repeat 100% 0 / contain;
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
        <Wrapper $ratio={ratio}>
            <Content $ratio={ratio} isRules>
                <p>
                    {'Перетаскивай детали из поля внизу экрана внутрь заданной рамки.\nОни должны заполнить пространство без пробелов.'}
                </p>
                <RulesWrapper $ratio={ratio}>
                    <Picture $ratio={ratio} src={boardPic} alt=""/>
                    {initialPuzzles.map((puz) => puz.id === 1 ? null : (
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
                        src={hand} 
                        alt=""
                        animate={{
                            left: [95 * ratio, 45 * ratio, 120 * ratio], 
                            bottom: [15 * ratio, 61 * ratio, 215 * ratio]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 0.8,
                            repeatType: 'reverse',
                            repeatDelay: 1.4,
                            delay: 0.5
                        }}
                    /> 
                    <PuzzAnimated 
                        $ratio={ratio}
                        initial={{}}
                        animate={{
                            left: [39 * ratio, 39 * ratio, 101 * ratio], 
                            bottom: [80 * ratio, 80 * ratio, 220 * ratio], 
                            rotate: [-15, 0, 0, 0],
                            width: [39 * 0.66 * ratio, 39 * 0.66 * ratio, 54 * 0.66 * ratio],
                            height: [80 * 0.66 * ratio, 80 * 0.66 * ratio, 90 * 0.66 * ratio],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 0.8,
                            repeatType: 'reverse',
                            repeatDelay: 1.4,
                            delay: 0.5
                        }}
                    />
                </RulesWrapper>
                <Button onClick={handleClose}>{isFirstRules ? 'начинаем' : 'понятно'}</Button>
            </Content>
        </Wrapper>
    )
}