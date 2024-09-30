import styled from 'styled-components';
import { useSizeRatio } from '../../contexts/SizeRatioContext';

const TYPE_TO_BG = {
    main: '#A39CFF',
    secondary: '#CAC5F9'
}

const TYPE_TO_BORDER = {
    main: '#CAC5F9',
    secondary: '#BDB9F9',
}

const Wrapper = styled.button`
    outline: none;
    background: ${({$type}) => TYPE_TO_BG[$type]};
    padding: ${({$ratio}) => $ratio * 12}px 0 ${({$ratio}) => $ratio * 11}px ${({$ratio}) => $ratio * 14}px;
    border-radius: ${({$ratio}) => $ratio * 30}px;
    font-weight: 700;
    border: ${({$ratio}) => $ratio * 3}px solid ${({$type}) => TYPE_TO_BORDER[$type]};
    width: 100%;
    font-size: ${({$ratio}) => $ratio * 18}px;
    cursor: pointer;
`;


const RoundWrapper = styled(Wrapper)`
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    padding: 0;
`;

export const Button = ({type = "main", ...props}) => {
    const ratio = useSizeRatio();

    return <Wrapper {...props} $ratio={ratio} $type={type} />
}


export const RoundButton = (props) => {
    const ratio = useSizeRatio();

    return <RoundWrapper {...props} $ratio={ratio}/>
}
