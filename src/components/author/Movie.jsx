import React from 'react'
import SubTitle from './SubTitle'
import styled from 'styled-components'
import Carousel from 'react-elastic-carousel'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

const Wrapper = styled.div`
width: 100%;
`;
const CarouselWrapper = styled.div`
font-family: sans-serif;
display: flex;
align-items: center;
justify-content: center;
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



const Video = styled.iframe`
width: 100%;
height: 100%;
`;

export default function Movie(props) {
    return (
        <Wrapper>
            <SubTitle name="Фильмы" add tip="Добавить фильм" />
            <CarouselWrapper>
                <Carousel breakPoints={breakPoints}>
                    {props.movies.map(movie =>
                        <Item key={movie.moviId}>
                            <Video src={`https://www.youtube.com/embed/${movie.movieId}`} frameborder="0" allowfullscreen/>
                        </Item>)
                    }
                </Carousel>
            </CarouselWrapper>
        </Wrapper>
    )
}
