import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import { questionGeek, questionGames, questionHarryPotter } from '../Questionario';
import { ButtonStyle, DivForm, FormStyle, RadioStyle, Titulo } from '../styles/CardQuestion'

export default class Question extends Component {

    constructor(props) { // declarating all the states and default values //receiving props as arg
        super(props);
        this.state = {
            quiz: this.props.quiz,
            leQuiz: '',
            numberQuestion: 0,
            question: {
                question: "",
                a: "",
                b: "",
                c: "",
                d: "",
                correct: ""
            },
            score: 0,
            answerSelect: ""
        }
    }

    componentDidMount() {

        if(this.state.quiz === 'geek') {
            const currentQuizData = questionGeek[this.state.numberQuestion]
            this.state.leQuiz = questionGeek
        } else if(this.state.quiz === 'games') {
            const currentQuizData = questionGames[this.state.numberQuestion]
            this.state.leQuiz  = questionGames
        } else if(this.state.quiz === 'harry') {
            const currentQuizData = questionHarryPotter[this.state.numberQuestion]
            this.state.leQuiz  = questionHarryPotter
        }

        console.log(this.state.leQuiz)


        this.setState({
            question: {
                question: this.state.leQuiz.question,
                a: this.state.leQuiz.a,
                b: this.state.leQuiz.b,
                c: this.state.leQuiz.c,
                d: this.state.leQuiz.d,
                correct: this.state.leQuiz.correct
            }
        })
    }

    handleSubmit = (e) => { //trigers the event when btn is clicke
        e.preventDefault()
        e.target.reset()
        if (this.state.answerSelect === this.state.question.correct) {
            this.setState({
                score: this.state.score + 1,
            })
        }
        if (this.state.numberQuestion < this.state.leQuiz.length) {
            this.componentDidMount() //this reloads and sets the values of the states
        } else {
            console.log(this.state.score);
        }
    }

    onChanged = (e) => { //detects the change and stores the value in answerSelect
        this.setState({
            answerSelect: e.currentTarget.value
        })
        console.log(this.state.answerSelect);
    }

    render() {
        return (
            <DivForm>
                <FormStyle onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="control-radio" style={{ padding: "4rem" }}>
                        {/* <h3>Pregunta {this.state.numberQuestion} de {questionGeek.length}</h3> */}
                        <Titulo>{this.state.question.question}</Titulo>
                        <RadioStyle
                            type="radio"
                            label={this.state.question.a}
                            value={this.state.question.a}
                            name={'respuestas'}
                            id={`respuesta1`}
                            onChange={this.onChanged}
                        />
                        <RadioStyle
                            type="radio"
                            label={this.state.question.b}
                            value={this.state.question.b}
                            name={'respuestas'}
                            id={`respuesta2`}
                            onChange={this.onChanged}
                        />
                        <RadioStyle
                            type="radio"
                            label={this.state.question.c}
                            value={this.state.question.c}
                            name={'respuestas'}
                            id={`respuesta3`}
                            onChange={this.onChanged}
                        />
                        <RadioStyle
                            type="radio"
                            label={this.state.question.d}
                            value={this.state.question.d}
                            name={'respuestas'}
                            id={`respuesta4`}
                            onChange={this.onChanged}
                        />
                    </Form.Group>
                    <ButtonStyle variant="primary" type="submit" onClick={() => { this.setState({ numberQuestion: this.state.numberQuestion + 1 }) }}>
                        Enviar
                    </ButtonStyle>
                    <h2 style={{ textAlign: "center" }}>{this.state.score}/{this.state.leQuiz.length} </h2>
                </FormStyle>
            </DivForm>
        )
    }
}