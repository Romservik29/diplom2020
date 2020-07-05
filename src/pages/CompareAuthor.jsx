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
  background-color: #0000005c;

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
                },
                {
                    correct: 1,
                    question: "Я, сколько ни любил бы вас, Привыкнув, разлюблю тотчас.",
                    photo2: "https://www.yarnews.net/files/1/1000/62163.jpg",
                    photo1: "https://avatars.mds.yandex.net/get-zen_doc/108399/pub_5b5085674cfa8b00ab54d7de_5b50bafbe83ed200aa464977/scale_1200"
                },
                {
                    correct: 2,
                    question: "Описание цветка с любовью к природе гораздо более заключает в себе гражданского чувства, чем обличение взяточников…",
                    photo1: "https://www.fresher.ru/mary/7-2019/prichina-ssory-mezhdu-samuilom-marshakom-i-korneem-chukovskim/8.jpg",
                    photo2: "https://im0-tub-by.yandex.net/i?id=b3b22a3eaf843c2be11d28c8337350d7&n=13"
                },
                {
                    correct: 2,
                    question: "Наиважнейшею приметою удачи русского народа есть его садистская жестокость.",
                    photo1: "https://im0-tub-by.yandex.net/i?id=f4219c7b1f0f8c812155a4c278852edd&n=13",
                    photo2: "https://img-fotki.yandex.ru/get/4105/85415274.51/0_b3de1_ebffd7ed_XL.jpg"
                },
                {
                    correct: 1,
                    question: "О, если б без слов сказаться душой было можно! У любви есть слова, те слова не умрут.",
                    photo1: "https://im0-tub-by.yandex.net/i?id=7f11222c3bded869f9a1070503c3c4e7&n=13",
                    photo2: "https://avatars.mds.yandex.net/get-zen_doc/1209300/pub_5c11345634cf4e00ab025b6b_5c11345baace0400adfd7cd8/scale_1200"
                }
            ]
        }
    }

    componentDidMount() {

    }
    handleAnswer = (answer) => {

        if (this.state.answered === false) {
            this.setState({
                answered: true,
            })
            if (this.state.correctAnswer === answer) {
                this.setState((state) => ({
                    score: state.score + 1,
                    correct: true,
                }))
            }
            else {
                this.setState({
                    correct:false
                })
            }
        }
    }
    handleNext = () => {
        if (this.state.correct !== false) {
            this.setState((state) => ({
                currentQuest: state.currentQuest + 1,
                correct: '',
                answered: false
            }))
            setTimeout(() => this.setState((state) => ({
                correctAnswer: state.data[state.currentQuest].correct
            })
            ), 0)
        } else {
            this.setState({
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
                    },
                    {
                        correct: 1,
                        question: "Я, сколько ни любил бы вас, Привыкнув, разлюблю тотчас.",
                        photo2: "https://www.yarnews.net/files/1/1000/62163.jpg",
                        photo1: "https://avatars.mds.yandex.net/get-zen_doc/108399/pub_5b5085674cfa8b00ab54d7de_5b50bafbe83ed200aa464977/scale_1200"
                    },
                    {
                        correct: 2,
                        question: "Описание цветка с любовью к природе гораздо более заключает в себе гражданского чувства, чем обличение взяточников…",
                        photo1: "https://www.fresher.ru/mary/7-2019/prichina-ssory-mezhdu-samuilom-marshakom-i-korneem-chukovskim/8.jpg",
                        photo2: "https://im0-tub-by.yandex.net/i?id=b3b22a3eaf843c2be11d28c8337350d7&n=13"
                    },
                    {
                        correct: 2,
                        question: "Наиважнейшею приметою удачи русского народа есть его садистская жестокость.",
                        photo1: "https://im0-tub-by.yandex.net/i?id=f4219c7b1f0f8c812155a4c278852edd&n=13",
                        photo2: "https://img-fotki.yandex.ru/get/4105/85415274.51/0_b3de1_ebffd7ed_XL.jpg"
                    },
                    {
                        correct: 1,
                        question: "О, если б без слов сказаться душой было можно! У любви есть слова, те слова не умрут.",
                        photo1: "https://im0-tub-by.yandex.net/i?id=7f11222c3bded869f9a1070503c3c4e7&n=13",
                        photo2: "https://avatars.mds.yandex.net/get-zen_doc/1209300/pub_5c11345634cf4e00ab025b6b_5c11345baace0400adfd7cd8/scale_1200"
                    }
                ]
            })
        }
    }
    render() {

        return (

            <Wrapper className="App">


                <ImageWrapper onClick={() => this.handleAnswer(1)}>
                    <img width="450px" height="450px" src={this.state.data[this.state.currentQuest].photo1} alt="Писатель1" />
                </ImageWrapper >
                <div style={{ margin: 'auto' }}>
                    {this.state.correct === ''
                        ? <Score>{this.state.score}</Score>
                        : this.state.correct === true
                            ? <Score style={{ backgroundColor: 'rgb(55, 242, 55)' }}>{this.state.score}</Score>
                            : <Score style={{ backgroundColor: '#db3131' }}>{this.state.score}</Score>
                    }

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
                        {this.state.correct !== false
                            ? <Button disabled={!this.state.answered} onClick={this.handleNext} variant="contained">
                                Следующий
                        </Button>
                            : <Button disabled={!this.state.answered} onClick={this.handleNext} variant="contained">
                                Начать заново
                        </Button>
                        }
                    </Answer>
                </div>
                <ImageWrapper onClick={() => this.handleAnswer(2)}>
                    <img width="450px" height="450px" src={this.state.data[this.state.currentQuest].photo2} alt="Писатель2" />
                </ImageWrapper>
            </Wrapper>
        );
    }
}
