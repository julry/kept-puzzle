import { useDrop } from "react-dnd";
import styled from "styled-components";
import { FlexWrapper } from "./FlexWrapper";

const Wrapper = styled(FlexWrapper)`
    position: relative;
    flex-grow: 1;
    height: auto;
`;

export const GameContent = ({ onDrop, children, isWin }) => {
    const [, drop] = useDrop(() => (
        {
            accept: 'PUZZLE',
            collect: monitor => ({
                hovered: monitor.canDrop() && monitor.isOver(),
            }),
            drop: (item) => {
                console.log('drop content');
                onDrop?.(item);
            },
        }
    ), []);

    return (
        <Wrapper ref={!isWin ? drop : null}>
            {children}
        </Wrapper>
    )
}