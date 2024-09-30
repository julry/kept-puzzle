import styled from "styled-components";
import bg from "../../assets/images/bgPostLvl3.svg";
import pic from "../../assets/images/postLvl3.svg";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { PostGameWrapper } from "../shared/PostGameWrapper";

const PictureWrapper = styled.div`
    margin-top: auto;
    position: relative;
    height: ${({$ratio}) => $ratio * 290}px;
    width: ${({$ratio}) => $ratio * 274}px;
`;

const Picture = styled.img`
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${({$ratio}) => $ratio * 274}px;
    height: ${({$ratio}) => $ratio * 290}px;
    object-fit: contain;
`;

export const PostGame3 = () => {
    const ratio = useSizeRatio();

    const text = (
        <p>
            Сотрудники Kept <b>достигают результатов</b> не только на проектах, но и в карьере. В компании ты сможешь{' '}
            быстро расти по прозрачной карьерной лестнице, достигать индивидуальных целей при поддержке менеджера-куратора{' '}
            и работать с менторами.
        </p>
    )
    return (
        <PostGameWrapper 
            level={3} 
            text={text}
            bg={bg}
        >
            <PictureWrapper $ratio={ratio}>
                <Picture $ratio={ratio} src={pic} alt="" />
            </PictureWrapper>
        </PostGameWrapper>
    )
}