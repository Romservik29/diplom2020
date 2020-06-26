import React, { Component } from "react";
import styled from 'styled-components'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const Wrapper = styled.div`
width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 0px;
  top: 0px;

`;

const QuestionWrapper = styled.div`
max-width: 300px;
margin: auto;
`;

const Question = styled.div`
padding: 0.5em;
font-family: Roboto;
font-weight: bold;
border-bottom: 1px solid grey;
`;

const Sentence = styled.div`
padding: 0.5em;
font-family: Roboto;
text-align: left;
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

const ArrowRight = styled(ArrowUpwardIcon)`
transform: rotate(90deg);  

`;

const ArrowLeft = styled(ArrowUpwardIcon)`
transform: rotate(270deg);  

`;

const BackgroundQuestion = styled.div`
margin: auto;
display: flex;
background-color: #a4cdf0;
border-radius: 3px;
`;

const Score = styled.div`
background-color: #a4cdf0;
padding: 10px;
border-radius: 3px 3px 0px 0px;
font-size: 3em;
width: 280px;
margin: auto;
`;

const Answer = styled.div`
background-color: #a4cdf0;
padding: 10px;
border-radius: 0px 0px 3px 3px;
width: 280px;
margin: auto;
`;

export default class CompareAuthor extends Component {
    constructor() {
        super();
        this.state = {
            currentQuest: 0,
            correct: '',
            answered: false,
            score: 0,
            correctAnswer: 1,
            data: [
                {
                    correct: 1,
                    question: "Я говорю всем открыто, что беру взятки, но чем взятки? Борзыми щенками. Это совсем иное дело.",
                    photo1: "https://all.culture.ru/uploads/bd7e21cd9e2ca98fc291fa9eed37fba5.jpeg",
                    photo2: "https://24smi.org/public/media/resize/800x-/celebrity/2019/01/12/9jhwwscdqigo-uiliam-golding.jpg"
                }
            ]
        }
    }

    componentDidMount() {

    }
    handleAnswer(answer) {
        if (this.state.answered === false) {
            this.setState({
                answered: true,

            })
            if (this.state.correctAnswer === answer) {
                this.setState({
                    score: this.state.score+1,
                    correct: true,
                })
            }
        }
    }
    handleNext() {
        this.setState({
            currentQuest: this.state.currentQuest+1,
            correct: '',
        })
        setTimeout(() => this.setState({
            correctAnswer: this.state.data[this.state.currentQuest]
        }), 0)
    }
    render() {

        return (

            <Wrapper className="App">
                {this.state.===true&&<div>Правильно</div>}
                {this.state===false&&<div>Правильно</div>}
                {this.state===''&&<div>Правильно</div>}

                <ImageWrapper>
                    <img onClick={() => this.handleAnswer(1)} width="550px" height="450px" src={this.state.data[this.state.currentQuest].photo1} alt="Писатель1" />
                </ImageWrapper>
                <div style={{ margin: 'auto' }}>
                    <Score>{this.state.score}</Score>
                    <BackgroundQuestion>
                        <div style={{ margin: 'auto' }}>
                            <ArrowLeft style={{ fontSize: '4em' }} />
                        </div>

                        <QuestionWrapper>
                            <Paper square>
                                <Question>
                                    Выбирите автора на основе следующего предложения:
                        </Question>
                                <Sentence>
                                    {this.state.data[this.state.currentQuest].question}
                                </Sentence>
                            </Paper>
                        </QuestionWrapper>
                        <div style={{ margin: 'auto' }}>
                            <ArrowRight style={{ fontSize: '4em' }} />
                        </div>
                    </BackgroundQuestion>
                    <Answer>
                        <Button onClick={this.handleNext} variant="contained">
                            Следующий
                        </Button>
                    </Answer>
                </div>
                <ImageWrapper>
                    <img onClick={() => this.handleAnswer(2)} width="550px" height="450px" src={this.state.data[this.state.currentQuest].photo2} alt="Писатель2" />
                </ImageWrapper>
            </Wrapper>
        );
    }
}
