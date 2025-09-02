import { useState } from "react";
import styled from "styled-components";
import { useProgress } from "../../contexts/ProgressContext";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { reachMetrikaGoal } from "../../utils/reachMetrikaGoal";
import { Block } from "../shared/Block";
import { Button } from "../shared/Button";
import { FlexWrapper } from "../shared/FlexWrapper";
import bg from "../../assets/images/bgFinal.svg";

const Wrapper = styled(FlexWrapper)`
    background: url(${bg}) no-repeat 0 0 / cover;
    justify-content: center;
`;

const Title = styled.h3`
    font-size: ${({$ratio}) => $ratio * 18}px;
    margin-bottom: ${({$ratio}) => $ratio * 13}px;
`;

const BlockStyled = styled(Block)`
    flex-direction: column;
    padding-bottom: ${({$ratio}) => $ratio * 10}px;
    padding-top: ${({$ratio}) => $ratio * 25}px;

    & p {
        font-size: ${({$ratio}) => $ratio * 12}px;
    }

    @media screen and (min-height: 800px) and (max-width: 450px){
        & p {
            font-size: ${({$ratio}) => $ratio * 14}px;
        }
    }
`;

const InputStyled = styled.input`
    outline: none;
    border: 3px solid ${({$isCorrect}) => $isCorrect ? '#BDB9F9' : '#FF605C'};
    background: rgba(202, 197, 249, ${({$isCorrect}) => $isCorrect ? 0.5 : 0.3});
    color: ${({$isCorrect}) => $isCorrect ? '#531A56' : '#FF605C'};
    padding: ${({$ratio}) => $ratio * 13}px ${({$ratio}) => $ratio * 20}px;
    margin: ${({$ratio}) => $ratio * 18}px 0 ${({$ratio}) => $ratio * 10}px;
    width: 100%;
    border-radius: ${({$ratio}) => $ratio * 30}px;

    &::placeholder {
        color: #531A56;
        opacity: 0.3;
    }
`;

const InputRadioButton = styled.input`
  display: none;
`;

const RadioIconStyled = styled.div`
  position: relative;
  flex-shrink: 0;
  width: ${({$ratio}) => $ratio * 15}px;
  height: ${({$ratio}) => $ratio * 15}px;
  background-color: #D7D4F4;
  border-radius: 50%;
  margin-right: ${({$ratio}) => $ratio * 10}px;
  margin-top: ${({$ratio}) => $ratio * 2}px;
`;

const RadioButtonLabel = styled.label`
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  font-size: ${({$ratio}) => $ratio * 10}px;
  width: 100%;
  text-align: left;

  & ${InputRadioButton}:checked + ${RadioIconStyled}::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${({$ratio}) => $ratio * 9}px;
    height: ${({$ratio}) => $ratio * 9}px;
    background-color: #A39CFF;
    border-radius: 50%;
  }

  & + & {
    margin-top: ${({$ratio}) => $ratio * 10}px;
  }
`;

const Link = styled.a`
    color: inherit;
    text-decoration: none;
    border-bottom: 0.5px solid #531a56;
`;

const ButtonStyled = styled(Button)`
    margin-top: ${({$ratio}) => $ratio * 13}px;

    & + & {
        margin-top: ${({$ratio}) => $ratio * 10}px;
    }
`;

export const PreFinal = () => {
    const {next, registrateEmail} = useProgress();
    const [email, setEmail] = useState(''); 
    const [isAgreed, setIsAgreed] = useState(false);
    const [isAdsAgreed, setIsAdsAgreed] = useState(false);
    const [isCorrect, setIsCorrect] = useState(true);
    const [isSending, setIsSending] = useState(false);
    const emailRegExp = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/gi;
    const ratio = useSizeRatio();

    const handleBlur = () => {
        if (email.match(emailRegExp) || !email) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    const handleChange = (e) => {
        if (isSending) return;
        setIsCorrect(true);
        setEmail(e.target.value);
    };


    const handleClick = async () => {
        if (isSending) return;
        setIsSending(true);
        await registrateEmail({email, isAdsAgreed});
        reachMetrikaGoal('mail');
        setIsSending(false);
        next();
    }

    return (
        <Wrapper>
            <BlockStyled $ratio={ratio}>
                <Title $ratio={ratio}>
                    Ура, цель достигнута —{'\n'}все картинки собраны!
                </Title>
                <p>
                    Теперь ты знаешь, как важно, чтобы все детальки были на своем месте. Так и в Kept:{' '}
                    каждое действие и сотрудник важны для получения крутого результата. Поэтому компания старается{' '}
                    создать комфортные условия для развития каждого человека.{'\n\n'}
                    <b>Участвуй в розыгрыше от Kept и получи шанс выиграть крутые призы.</b>{' '}
                    Введи свой email — если победишь, мы с тобой свяжемся:
                </p>
                <InputStyled 
                    $ratio={ratio} 
                    placeholder="example@email.com" 
                    onChange={handleChange} 
                    onBlur={handleBlur} 
                    value={email}
                    $isCorrect={isCorrect}
                />
                <RadioButtonLabel $ratio={ratio}>
                    <InputRadioButton
                        $ratio={ratio}
                        type="checkbox"
                        disabled={isSending}
                        value={isAgreed}
                        checked={isAgreed}
                        onChange={() => setIsAgreed((prevAgreed) => !prevAgreed)}
                    />
                    <RadioIconStyled $ratio={ratio}/>
                    <span>
                        Я даю согласие на{"\u00A0"}
                        <Link href="https://fut.ru/personal_data_agreement" target="_blank">обработку</Link>{' '}
                        и{"\u00A0"}<Link href="https://fut.ru/personal_data_transfer_agreement" target="_blank">передачу</Link>{' '} 
                        моих персональных данных и соглашаюсь с условиями{"\u00A0"}
                        <Link href="https://fut.ru/user-agreement" target="_blank">Пользовательского соглашения</Link>,{' '}
                        <Link href="https://fut.ru/personal-data" target="_blank">Политикой обработки персональных данных</Link>,{' '} 
                        а также с{"\u00A0"}<Link href="https://kept-braingame.fut.ru/agreement.pdf" target="_blank">правилами проведения акции</Link>.
                    </span>
                </RadioButtonLabel>
                <RadioButtonLabel $ratio={ratio}>
                    <InputRadioButton
                        $ratio={ratio}
                        type="checkbox"
                        disabled={isSending}
                        value={isAdsAgreed}
                        checked={isAdsAgreed}
                        onChange={() => setIsAdsAgreed((prevAgreed) => !prevAgreed)}
                    />
                    <RadioIconStyled $ratio={ratio}/>
                    <span>
                        Хочу ловить персональные стажировки от топ-компаний в{"\u00A0"} 
                        <Link href="https://fut.ru/adv_messages_agreement" target="_blank">рекламной рассылке</Link>
                    </span>
                </RadioButtonLabel>
                <ButtonStyled 
                    $ratio={ratio}
                    onClick={handleClick}
                    disabled={isSending || !isCorrect || !email || !isAgreed}
                >
                    отправить
                </ButtonStyled>
                <ButtonStyled 
                    $ratio={ratio}
                    type="secondary" 
                    disabled={isSending} 
                    onClick={next}
                >
                    не хочу
                </ButtonStyled>
            </BlockStyled>
        </Wrapper>
    )
}