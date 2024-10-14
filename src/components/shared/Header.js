import styled from "styled-components";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { RoundButton } from "./Button";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 ${({$ratio}) => $ratio * 30}px;
`;

const RulesButton = styled(RoundButton)`
    width: ${({$ratio}) => $ratio * 34}px !important;
    height: ${({$ratio}) => $ratio * 34}px;
    background: #FF605C;
    border: 3px solid #F49597;

    & svg {
        width: ${({$ratio}) => $ratio * 12}px;
        height: ${({$ratio}) => $ratio * 18}px;
    }
`;

const LevelWrapper = styled.div`
    border-radius: ${({$ratio}) => $ratio * 30}px;
    border: ${({$ratio}) => $ratio * 3}px solid #CAC5F9;
    background: #E4E4EF;
    padding: ${({$ratio}) => $ratio * 3}px ${({$ratio}) => $ratio * 14}px ${({$ratio}) => $ratio * 5}px;
`;

export const Header = ({level, onClickRules, ...props}) => {
    const ratio = useSizeRatio();

    return (
        <Wrapper {...props} $ratio={ratio}>
            <RulesButton $ratio={ratio} onClick={onClickRules}> 
                <svg viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.23867 11.1106C4.10902 11.8178 4.66889 12.466 5.38787 12.466L5.38198 12.4602H5.93006C6.51939 12.4602 6.99675 12.0182 7.08515 11.4406V11.4347C7.12051 11.1813 7.25017 10.8807 7.46233 10.5212C7.58609 10.315 7.73931 10.1205 7.92201 9.93781C8.11649 9.74922 8.32275 9.55474 8.54081 9.35437C8.75886 9.15989 8.99459 8.93005 9.23622 8.67074C9.75483 8.12266 10.1792 7.52743 10.5151 6.87917C10.8569 6.23679 11.0278 5.51781 11.0278 4.73399C11.0278 4.20359 10.9335 3.69087 10.7508 3.17815C10.574 2.66543 10.3147 2.21754 9.97289 1.82858C9.47785 1.23335 8.85905 0.809033 8.11059 0.549727C7.37393 0.29042 6.58422 0.160767 5.74737 0.160767C5.19929 0.160767 4.65121 0.243273 4.10313 0.402393C3.56094 0.561513 3.07769 0.80314 2.64158 1.12138C2.08171 1.51034 1.63382 2.03485 1.29201 2.68901C1.20361 2.85991 1.1211 3.04261 1.05038 3.2253C0.755713 3.97965 1.33326 4.79882 2.14065 4.78703H2.59443C3.10126 4.78703 3.53147 4.45111 3.70238 3.97375C3.70377 3.96958 3.70516 3.96508 3.70663 3.96032C3.71138 3.94494 3.71695 3.92694 3.72595 3.90893C3.83203 3.64373 3.99705 3.41978 4.22689 3.23709C4.42137 3.07207 4.66299 2.94831 4.94587 2.8717C5.23465 2.78919 5.53521 2.74794 5.84755 2.74794C6.22473 2.74794 6.58422 2.80687 6.92014 2.93063C7.25606 3.0485 7.53305 3.24298 7.74521 3.52586C7.88075 3.68498 7.97505 3.87946 8.02809 4.09751C8.08113 4.31557 8.11059 4.5513 8.11059 4.80471C8.11059 5.19367 8.06345 5.55906 7.96326 5.90087C7.86307 6.23679 7.65681 6.57861 7.34446 6.92042C6.96729 7.32706 6.61958 7.65119 6.30723 7.89282C5.99489 8.12855 5.7179 8.37018 5.46449 8.61181C5.21697 8.84754 4.98713 9.17167 4.78086 9.57242C4.54513 9.99085 4.37422 10.4505 4.26814 10.9456C4.26276 10.9724 4.25862 10.9981 4.25457 11.0231C4.24975 11.0529 4.24508 11.0817 4.23867 11.1106ZM5.68682 17.8393C6.66326 17.8393 7.45482 17.0478 7.45482 16.0713C7.45482 15.0949 6.66326 14.3033 5.68682 14.3033C4.71038 14.3033 3.91882 15.0949 3.91882 16.0713C3.91882 17.0478 4.71038 17.8393 5.68682 17.8393Z" fill="white"/>
                </svg>
            </RulesButton>
            <LevelWrapper $ratio={ratio}>уровень {level}</LevelWrapper>
        </Wrapper>
    )
}