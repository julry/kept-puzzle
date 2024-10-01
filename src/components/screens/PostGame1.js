import styled from "styled-components";
import bg from "../../assets/images/bgPostLvl1.svg";
import pic from "../../assets/images/postLvl1.png";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { PostGameWrapper } from "../shared/PostGameWrapper";

const PictureWrapper = styled.div`
    padding: ${({$ratio}) => $ratio * 38}px 0 ${({$ratio}) => $ratio * 17}px;
`;

const Picture = styled.img`
    position: relative;
    z-index: 2;
    width: ${({$ratio}) => $ratio * 233}px;
    height: ${({$ratio}) => $ratio * 163}px;
    object-fit: contain;
`;

export const PostGame1 = () => {
    const ratio = useSizeRatio();

    const text = (
        <p>
            <b>Каждый сотрудник Kept может рассчитывать на поддержку и помощь коллег</b>. Без совместных усилий не получить{' '}
            масштабных результатов, зато <b>все вместе</b> мы можем <b>реализовать сложные и интересные проекты!</b>{'\n\n'}
            <b>А после</b> собраться в неформальной обстановке, поиграть в настолки, на выходных покататься на сапах{' '}
            или <b>сыграть в волейбол</b>.
        </p>
    )
    return (
        <PostGameWrapper 
            level={1} 
            text={text}
            bg={bg}
            // metrika="firstlevel"
        >
            <PictureWrapper $ratio={ratio}>
                <Picture $ratio={ratio} src={pic} alt="" />
            </PictureWrapper>
        </PostGameWrapper>
    )
}