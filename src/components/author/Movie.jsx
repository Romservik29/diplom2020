import React from 'react'
import SubTitle from './SubTitle'
import styled from 'styled-components'
import Carousel from 'react-elastic-carousel' 
import {Link} from 'react-router-dom'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];


export default function Movie() {

const Wrapper = styled.div`
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

const Item = styled(Link)`
display: flex;
height: 250px;
width: 100%;
color: #fff;
margin: 0 15px;
font-size: 4em;
`;



const Video= styled.iframe`
width: 100%;
height: 100%;
`;


    return (
        <Wrapper>
            <SubTitle name="Фильмы" add/>
            <CarouselWrapper>
                <Carousel breakPoints={breakPoints}>
                    <Item>
                    <Video  src="https://www.youtube.com/embed/O_joXtIT0is" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>

                        
                    </Item>
                    <Item>      
                        <Video  src="https://www.youtube.com/embed/O_joXtIT0is"frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                    </Item>
                    <Item>      
                        <Video  src="https://www.youtube.com/embed/O_joXtIT0is" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                    </Item>
                </Carousel>
            </CarouselWrapper>
        </Wrapper>
    )
}
