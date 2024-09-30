import styled from "styled-components";

export const Shining = styled.div`
    position: absolute;
    width: 100vw;
    max-width: 374px;
    max-height: 374px;
    height: 100vw;
    background: radial-gradient(46.99% 46.99% at 50% 50%, rgba(228, 228, 239, 0.5) 0%, rgba(228, 228, 239, 0.188025) 59.77%, rgba(228, 228, 239, 0) 100%);
    filter: drop-shadow(0px 8px 0px #9189FF);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.4s;
`;