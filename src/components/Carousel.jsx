import React from 'react'
import Carousel from 'react-elastic-carousel' 
import styled from 'styled-components'

const Wrapper = styled.div`
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  
`;

const Item = styled.div`
display: flex;
justify-content: center;
height: 250px;
width: 100%;
color: #fff;
margin: 0 15px;
font-size: 4em;
background: url(${'https://sun9-21.userapi.com/c850136/v850136968/d1b2b/TiPdxf2idwM.jpg?ava=1'});
`;

const Shadow = styled.div`
width: 100%;
height: 250px;
display: none;
font-size: 30px;
font-weight: 700;
font-family: 'Segoe UI';
line-height: 300px;
text-align: center;
color: #fff;
    &:hover{
        display: block;
        background: rgba(0,0,0,0.5);
        cursor: pointer;
    }
`;

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];


export default function CarouselGen(props) {
    return (
        <Wrapper>
            <Carousel breakPoints={breakPoints}>
                <Item><Shadow onClick={()=>alert('ghbdtn')}>1</Shadow></Item>
                <Item><Shadow/></Item>
                <Item><Shadow/></Item>
                <Item><Shadow/></Item>
                <Item><Shadow/></Item>
                <Item><Shadow/></Item>
            </Carousel>
        </Wrapper>
    )
}
