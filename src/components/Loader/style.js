import styled, {keyframes} from 'styled-components'

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const LoaderCom = styled.div`
    position: relative;
    width: 160px;
    height: 160px;

    .loader-item{
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 128px;
        height: 128px;
        margin: 8px;
        border: 3px solid #32386b;
        border-radius: 50%;
        animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #32386b transparent transparent transparent;

        &:nth-child(1) {
            animation-delay: -0.45s;
        }
        &:nth-child(2) {
            animation-delay: -0.3s;
        }
        &:nth-child(3) {
            animation-delay: -0.15s;
        }
    }
`