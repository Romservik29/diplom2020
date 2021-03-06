import React from 'react'
import Carousel from 'react-elastic-carousel'
import styled from 'styled-components'
import EmptyContainer from './EmptyContainer';

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

const Img = styled.img`
width:100%;
height: 100%;
`;

export default function CarouselGen(props) {
    return (
        <Wrapper>
            {props.illustrations===undefined
                ? <EmptyContainer />
                : <CarouselWrapper>
                    <Carousel breakPoints={breakPoints}>
                        {props.illustrations.map(i => <Item><Img src={i.illustrationUrl} alt={props.name} /></Item>)}
                    </Carousel>
                </CarouselWrapper>}
        </Wrapper>
    )
}
