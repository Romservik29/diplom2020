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
height: 250px;
width: 100%;
color: #fff;
margin: 0 15px;
font-size: 4em;
`;

const Shadow = styled.div`
width: 100%;
height: 100%;
display: none;
font-size: 30px;
font-weight: 700;
font-family: 'Segoe UI';
line-height: 300px;
text-align: center;
color: #fff;
`;

export default function CarouselGen(props) {

    return (
        <Wrapper>
            <SubTitle name="Иллюстрации" add/>
            <CarouselWrapper>
                <Carousel breakPoints={breakPoints}>
                    <Item><img src={img} alt="Mom"/></Item>
                    <Item><img src={img} alt="Mom"/><Shadow/></Item>
                    <Item><img src={img} alt="Mom"/><Shadow/></Item>
                    <Item><img src={img} alt="Mom"/><Shadow/></Item>
                    <Item><img src={img} alt="Mom"/><Shadow/></Item>
                    <Item><img src={img} alt="Mom"/><Shadow/></Item>
                </Carousel>
            </CarouselWrapper>
        </Wrapper>
    )
}
