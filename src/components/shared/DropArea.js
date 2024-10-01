import { useDrop } from "react-dnd";
import styled from "styled-components";

const Wrapper = styled.div`
    position: absolute;
    ${({$position}) => $position};
    z-index: 2;
`;

const Horizontal = styled(Wrapper)`
    width: 100%;
    height: calc((100% - ${({$size}) => $size}px) / 2);
`;

const Vertical = styled(Wrapper)`
    height: 100%;
    width: calc((100% - ${({$size}) => $size}px) / 2);
`;

export const DropArea = ({onDrop, isHorizontal, position, size, ...props}) => {
    const Component = isHorizontal ? Horizontal : Vertical;
    const [, drop] = useDrop(() => (
        {
            accept: 'PUZZLE',
            collect: monitor => ({
                hovered: monitor.canDrop() && monitor.isOver(),
            }),
            drop: (item) => {
                onDrop?.(item);
            },
        }
    ), []);

    return (<Component ref={drop} $position={position} $size={size} {...props} />)
}