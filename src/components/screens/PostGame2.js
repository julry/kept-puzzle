import styled from "styled-components";
import bg from "../../assets/images/bgPostLvl2.svg";
import pic from "../../assets/images/postLvl2.png";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { PostGameWrapper } from "../shared/PostGameWrapper";

const PictureWrapper = styled.div`
    padding: ${({$ratio}) => $ratio * 44}px 0 ${({$ratio}) => $ratio * 39}px;
`;

const Picture = styled.img`
    width: ${({$ratio}) => $ratio * 228}px;
    height: ${({$ratio}) => $ratio * 175}px;
    object-fit: contain;
`;

export const PostGame2 = () => {
    const ratio = useSizeRatio();

    const text = (
        <p>
            <b>Kept поддерживает гибкость в работе.</b> Ты можешь работать из дома или из офиса, а время начала и окончания{' '}
            рабочего дня согласовать со своим руководителем.{'\n\n'}
            Мы создаём такие условия, чтобы стажёры успешно совмещали учёбу и работу!   
        </p>
    )
    return (
        <PostGameWrapper 
            level={2} 
            text={text}
            bg={bg}
        >
            <PictureWrapper $ratio={ratio}>
                <Picture $ratio={ratio} src={pic} alt="" />
            </PictureWrapper>
        </PostGameWrapper>
    )
}