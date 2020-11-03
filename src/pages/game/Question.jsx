import React from 'react'
import styled from 'styled-components'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

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

export default function QuestionBlock(props) {
    debugger
    return (
        <div style={{ margin: 'auto' }}>
                    {props.correct === null
                        ? <Score>{props.score}</Score>
                        : props.correct === true
                            ? <Score style={{ backgroundColor: 'rgb(55, 242, 55)' }}>{props.score}</Score>
                            : <Score style={{ backgroundColor: '#db3131' }}>{props.score}</Score>
                    }
                    <BackgroundQuestion>
                        <div style={{ margin: 'auto' }}>
                            <ArrowLeft style={{ fontSize: '4em' }} />
                        </div>
                        <QuestionWrapper>
                            <Paper square>
                                <Question>
                                    {props
                                        ? "Выбирите автора на основе следующего предложения:"
                                        : "К сожаление вопросы закончились, но вы можете пройти игру ещё раз"}
                                </Question>
                                <Sentence>
                                    {props.data[props.currentQuest].question}
                                </Sentence>
                            </Paper>
                        </QuestionWrapper>
                        <div style={{ margin: 'auto' }}>
                            <ArrowRight style={{ fontSize: '4em' }} />
                        </div>
                    </BackgroundQuestion>
                    <Answer>
                        {props.correct !== false
                            ? <Button disabled={!props.answered} onClick={props.handleNext} variant="contained">
                                Следующий
                        </Button>
                            : <Button disabled={!props.answered} onClick={props.handleNext} variant="contained">
                                Начать заново
                        </Button>
                        }

                    </Answer>
                </div>
    )
}
