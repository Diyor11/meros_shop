import styled from 'styled-components'

export const SearchInpit = styled.input`
    flex-grow: 1;
    height: 44px;
    padding-right: 1.25rem;
    background-color: #F4F7F8;
    margin-left: 1rem;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    border: 1px solid #E8EDF1;
    padding-left: 40px;
    
    @media (min-width: 1024px) {
        margin-left: 1.75rem;
        padding-left: 1.25rem;
        max-width: 24rem;
        &::placeholder{
            color: transparent;
        }
    }
`

export const Slide = styled.div`
    transition: .4s;
    transform: translateX(${({index, i}) => {
        if(index > i)
            return '-100%'
        else if(index < i)
            return '100%'
        else 
            return '0'
    }});
`

export const SpecialItem = styled.li`
    background: url(${({img}) => img});
    background-position: center;
    background-size: cover;
    height: 120px;
    background-repeat: no-repeat;

    @media (min-width: 1024px) {
        height: 170px;
    }
`

export const CardCom = styled.div`

img.icon{
    transition-duration: 300ms;
    transform: translateX(-100%);
    cursor: pointer;
}
&:hover{
        img.icon{
            transform: translateX(0%);
        }
    }
`

export const GrogSlider = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 286px;

    @media (min-width: 830px) {
        width: 572px;
    }
    @media (min-width: 1000px) {
        width: 858px;
    }
    @media (min-width: 1200px) {
        width: 1144px;
    }
`

export const SliderItem = styled.div`
    min-width: 286px;
    padding-left: 10px;
    padding-right: 10px;
    height: 300px;
    user-select: none;
    transition: transform 300ms linear;

    /* @media (min-width: 640px) {
        min-width: 50%;
    }
    @media (min-width: 768px) {
        min-width: 33.3%;
    }
    @media (min-width: 1024px) {
        min-width: 25%;
    } */
`