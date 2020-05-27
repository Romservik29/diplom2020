import React from 'react'
import Carousel from 'react-elastic-carousel' 
import styled from 'styled-components'
import SubTitle from './SubTitle'
const img ='https://sun9-21.userapi.com/c850136/v850136968/d1b2b/TiPdxf2idwM.jpg?ava=1';



const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];
const Wrapper = styled.div`
height: 100%;
width: 100%;
`;

const CarouselWrapper = styled.div`
font-family: sans-serif;
display: flex;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
`;

const Item = styled.div`
display: flex;
user-select: none;
height: 250px;
width: 100%;
color: #fff;
margin: 0 15px;
font-size: 4em;
`;

export default function CarouselGen(props) {
    return (
        <Wrapper>
            <SubTitle name="Иллюстрации" add tip="Добавить иллюстрацию"/>
            <CarouselWrapper>
                <Carousel breakPoints={breakPoints}>
                    {props.illustrations.map(i =><Item><img src={i.illustrationUrl} alt={props.name}/></Item>)}
                </Carousel>
            </CarouselWrapper>
        </Wrapper>
    )
}
