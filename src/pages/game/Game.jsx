import React from 'react'
import styled from 'styled-components'
import Question from './Question';

const Wrapper = styled.div`
width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 0px;
  top: 0px;
  background-color: #0000005c;

`;

const ImageWrapper = styled.div`
width: min-content;
height: 450px;
margin: auto;
cursor: pointer;
transition: 0.7s;
 &:hover{
  box-shadow: 0 0 6px 6px whitesmoke;
 }
`;

export default function Game(props) {
    return (
        <Wrapper className="App">
            <ImageWrapper onClick={() => props.handleAnswer(1)}>
                <img width="450px" height="450px" src={props.data[props.currentQuest].photo1} alt="Писатель1" />
            </ImageWrapper >
            <Question handleNext={props.handleNext} currentQuest={props.currentQuest}
            data={props.data} correct={props.correct} score={props.score} answered={props.answered}
            />
            <ImageWrapper onClick={() => props.handleAnswer(2)}>
                <img width="450px" height="450px" src={props.data[props.currentQuest].photo2} alt="Писатель2" />
            </ImageWrapper>
        </Wrapper >
    )
}
