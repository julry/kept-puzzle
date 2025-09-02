import {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {SizeRatioContextProvider} from '../contexts/SizeRatioContext';
import { Block } from './shared/Block';
import header from '../assets/images/blockHeaderCookie.svg';
import { Button } from './shared/Button';

const TARGET_WIDTH = 375;
const TARGET_HEIGHT = 677;
const MIN_MOCKUP_WIDTH = 450;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    @media (min-width: ${MIN_MOCKUP_WIDTH}px) {
        padding: 20px;
    }
`;

const WrapperInner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const Content = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    transform: translate(0, 0);
    background-color: #531A56;
    font-size: ${({$sizeRatio}) => `calc(16px * ${$sizeRatio})`};

    @media (min-width: ${MIN_MOCKUP_WIDTH}px) {
        overflow: hidden;
        max-width: ${({$sizeRatio}) => `calc(${TARGET_WIDTH}px * ${$sizeRatio})`};
        max-height: ${({$sizeRatio}) => `calc(${TARGET_HEIGHT}px * ${$sizeRatio})`};
        border: 2px solid #000000;
        border-radius: 10px;
        box-sizing: content-box;
    }
`;

const CookieWrapper = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    max-width: ${({$ratio}) => $ratio * 315}px;
    bottom: ${({$ratio}) => $ratio * 30}px;
    z-index: 1230;

    & > div > div:last-child {
        background: rgba(163, 156, 255, 1);
        padding: ${({$ratio}) => $ratio * 20}px;
        align-items: flex-start;
        height: ${({$ratio}) => $ratio * 90}px;
        border-top-color: rgba(163, 156, 255, 1);
    }

    & > div > div:first-child {
        background-image: url(${header});
    }

    & a {
        font-weight: 500;
        color: white;
        text-align: left;
        font-size: ${({$ratio}) => $ratio * 10}px;
        max-width: ${({$ratio}) => $ratio * 137}px;
    
        &:active {
            color: white;
        }
    }

    & button {
        position: absolute;
        bottom: ${({$ratio}) => $ratio * 20}px;
        right: ${({$ratio}) => $ratio * 20}px;
        z-index: 3;
        width: ${({$ratio}) => $ratio * 120}px;
        height: ${({$ratio}) => $ratio * 50}px;
        padding: 0;
    }
`;

export function ScreenTemplate(props) {
    const [isCookies, setIsCookies] = useState(false);

    const { children } = props;
    const wrapperRef = useRef();
    const wrapperInnerRef = useRef();

    useEffect(() => {
        const isAgreedCookies = localStorage.getItem('kept_cookies_agreed');
        if (isAgreedCookies) return;

        setIsCookies(!isAgreedCookies);
    }, []);

    const handleClick = () => {
        localStorage.setItem('kept_cookies_agreed', true);
        setIsCookies(false);
    };

    return (
        <SizeRatioContextProvider target={wrapperInnerRef} targetWidth={TARGET_WIDTH} targetHeight={TARGET_HEIGHT}>
            {(sizeRatio) => (
                <Wrapper ref={wrapperRef}>
                    <WrapperInner ref={wrapperInnerRef}>
                        <Content $sizeRatio={sizeRatio}>
                            {children}
                            {
                                isCookies && (
                                     <CookieWrapper $ratio={sizeRatio}>
                                        <Block>
                                            <a href="https://fut.ru/cookie" target="_blank" rel="noreferrer">
                                                Мы используем куки. Играя, ты соглашаешься с этим
                                            </a>
                                        </Block>
                                        <Button type='secondary' onClick={handleClick}>
                                            окей
                                        </Button>
                                    </CookieWrapper>
                                )
                            }
                        </Content>
                    </WrapperInner>
                </Wrapper>
            )}
        </SizeRatioContextProvider>
    );
};
