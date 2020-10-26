import React, { Component } from 'react';
import styled from 'styled-components';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const GameWrapper = styled('div')`
    display: flex;
    justify-content: center;
    height: 300px;
`;
const FormWrapper = styled('div')`
    margin-right: 20px;
`;
const popover = (
    <Popover id="popover-basic">
        <Popover.Title as="h3">Rules</Popover.Title>
        <Popover.Content>
            Guess a number between 1 - 100. A random number will be generated.
            Try to guess it in under 10 tries!
        </Popover.Content>
    </Popover>
);
const popover2 = (
    <Popover id="popover-basic">
        <Popover.Title as="h3">Rules</Popover.Title>
        <Popover.Content>
            Guess a number between 1-9. The <strong>computer</strong> will also guess a number.
            The closest guess to a randomly generated number wins.
        </Popover.Content>
    </Popover>
);

export class NumberGuesser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            randomNumber: Math.floor(Math.random() * 100) + 1 + "",
            guesses: "",
            lastResult: "",
            lowOrHi: "",
            guessCount: 1,
            classLastResult: "",
            classButtonNewGame: 'd-none',
            computerGuess: Math.floor(Math.random() * 10),
            targetGuess: Math.floor(Math.random() * 10),
            humanGuess: 0,
            humanScore: 0,
            computerScore: 0,
            currentRoundNumber: 1
        };

        this.checkGuess = this.checkGuess.bind(this);
        this.compareGuesses = this.compareGuesses.bind(this);
    }

    componentDidMount() {
        this.guessNumber.focus();
    }

    componentDidUpdate() {
    }


    checkGuess(event) {
        event.preventDefault();
        let guessValue = event.target.guessNumber.value;
        let randomValue = this.state.randomNumber;
        event.target.guessNumber.value = "";

        if (guessValue !== "") {
            this.setState((prevState) => ({
                guesses: prevState.guesses === "" ? `Previous guesses: ${guessValue}` : `${prevState.guesses}, ${guessValue}`,
                guessCount: prevState.guessCount + 1
            }));
            if (guessValue === randomValue) {
                this.setState({
                    lastResult: "Congratulations! You got it right!",
                    lowOrHi: "",
                    classLastResult: "m-2 p-1 bg-success",
                    classButtonNewGame: "btn btn-primary m-2"
                });

                this.submitGuess.setAttribute("disabled", "disabled");
                this.guessNumber.setAttribute("disabled", "disabled");

            } else if (this.state.guessCount === 10) {
                this.setState({
                    lastResult: "GAME OVER!",
                    lowOrHi: "",
                    classLastResult: "m-2 p-1 bg-danger",
                    classButtonNewGame: "btn btn-primary m-2"
                });

                this.submitGuess.setAttribute("disabled", "disabled");
                this.guessNumber.setAttribute("disabled", "disabled");


            } else if (guessValue > randomValue) {
                this.setState({
                    lastResult: "Wrong!",
                    lowOrHi: "Last guess was too high!",
                    classLastResult: "m-2 p-1 bg-danger"
                });
            } else if (guessValue < randomValue) {
                this.setState({
                    lastResult: "Wrong!",
                    lowOrHi: "Last guess was too low!",
                    classLastResult: "m-2 p-1 bg-danger"
                })
            }

        }
    }

    getAbsoluteDistance(x, target) {
        let x1 = Math.abs(x - target);
        return x1;
    }

    generateTarget() {
        return this.setState({
            target: Math.floor(Math.random() * 10)
        });
    }
    compareGuesses(e) {
        e.preventDefault();
        let humanGuess = e.target.humanGuess.value;
        let x1 = this.getAbsoluteDistance(humanGuess, this.state.targetGuess);
        let y1 = this.getAbsoluteDistance(this.state.computerGuess, this.state.targetGuess);



        if (humanGuess > 9) {
            alert('Number is out of range');
        }

        if (x1 < y1) {
            return this.updateScore('human');
        } else if (y1 < x1) {
            return this.updateScore('computer');
        } else {
            return this.updateScore('human');
        }
    }
    updateScore(winner) {
        debugger;
        if (winner === 'human') {
            this.setState({
                humanScore: 1
            });
        } else {
            this.setState({
                computerScore: 1
            });
        }
    }
    advanceRound() {
        this.setState({
            currentRoundNumber: 1
        });
    }


    render() {
        console.log(this.state.randomNumber);
        return (
            <div className='wrapper'>
                <GameWrapper>
                    <FormWrapper>
                        <form className="" onSubmit={this.checkGuess}>
                            <OverlayTrigger trigger={["hover", "focus"]} placement="left" overlay={popover}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                            </OverlayTrigger>
                            <label className="m-2">Guess a number between 1 - 100:</label>
                            <input name="guessNumber" type="number" min="1" max="100" ref={(input) => { this.guessNumber = input; }} className="form-control m-2" />
                            <button type="submit" ref={(button) => { this.submitGuess = button; }} className="btn btn-dark m-2">Submit guess</button>
                        </form>
                    </FormWrapper>

                    <div>
                        <p className="m-2">{this.state.guesses}</p>
                        <p className={this.state.classLastResult}>{this.state.lastResult}</p>
                        <p className="m-2">{this.state.lowOrHi}</p>
                    </div>
                </GameWrapper>

                <GameWrapper>
                    <FormWrapper>
                        <form className="" onSubmit={this.compareGuesses}>
                            <OverlayTrigger trigger={["hover", "focus"]} placement="left" overlay={popover2}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                            </OverlayTrigger>
                            <label className="m-2">Guess a number between 1 - 9:</label>
                            <input name="humanGuess" type="number" min="0" max="9" ref={(input2) => { this.humanGuess = input2; }} className="form-control m-2" />
                            <button type="submit" className="btn btn-dark m-2">Submit guess</button>
                        </form>
                    </FormWrapper>
                    <div>
                        {this.state.humanScore === 1 ? (
                            <div>
                                <p>The correct number was {this.state.targetGuess}</p>
                                <p>The Computer guessed {this.state.computerGuess}</p>
                                <p>You won!</p>
                                <p>You were closer than the computer!</p>
                            </div>
                        ) : (
                                <div></div>
                            )}
                        {this.state.computerScore === 1 ? (
                            <div>
                                <p>The correct number was {this.state.targetGuess}</p>
                                <p className="m-2">The computer were closer than you.</p>
                            </div>
                        ) : (
                                <div></div>
                            )}

                    </div>
                </GameWrapper>

            </div>
        );
    }
}

export default NumberGuesser;