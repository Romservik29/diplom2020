import React, { Component } from "react";
import Game from "./Game";
import data from "./data.json"

export default class GameContainer extends Component {
    constructor() {
        super();
        this.state = {
            currentQuest: 1,
            correct: null,
            answered: false,
            score: 0,
            correctAnswer: 1,
            data: data.authors
        }
    }

    handleAnswer = (answer) => {
        if (this.state.answered === false) {
            this.setState({
                answered: true,
            })
            if (this.state.correctAnswer === answer && this.state.score < 5) {
                this.setState((state) => ({
                    score: state.score + 1,
                    correct: true,
                }))
            } else {
                this.setState((state)=>({
                    correct: false,
                    score: "Игра окончена! Ваш счет:"+state.score
                }))
            }
        }
    }
    handleNext = () => {
        if (this.state.correct !== false) {
            if (this.state.currentQuest === 4) {
                this.setState(() => ({ answered: false }))
            } else this.setState((state) => ({
                currentQuest: state.currentQuest + 1,
                correct: null,
                answered: false
            }))
            setTimeout(() => this.setState((state) => ({
                correctAnswer: state.data[state.currentQuest].correct
            })
            ), 0)
        } else {
            this.setState({
                ...this.state,
                currentQuest: 0,
                correct: null,
                answered: false,
                score: 0,
                correctAnswer: 1
            })
        }
    }
    render() {
        return (
            <Game handleNext={this.handleNext} 
            handleAnswer={this.handleAnswer}
            data={this.state.data} 
            currentQuest={this.state.currentQuest}
            correct={this.state.correct}
            score={this.state.score}
            answered={this.state.answered}/>
        );
    }
}
