import React from 'react';
import FlashCards from './FlashCards';
import FlashCardForm from './FlashCardForm.js';
import './App.css';
import { Container, Header, } from "semantic-ui-react";

class App extends React.Component {
  state = {
    flashcards: [
      { id: 1, term: "State", answer: "Object which is one of the main features of React", },
    ],
  };

  addCard = (cardData) => {
    const card = { id: this.getId(), ...cardData, };
    this.setState({ flashcards: [...this.state.flashcards, card, ], });
  };

  editCard = (cardData) => {
    const flashcards = this.state.flashcards.map( flashcard => {
      if (flashcard.id === cardData.id)
        return cardData
      return flashcard
      })
      this.setState({ flashcards })
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };

  removeCard = (id) => {
    const flashcards = this.state.flashcards.filter( flashcard => {
      if (flashcard.id !== id)
        return flashcard
    });
    this.setState({ flashcards: [...flashcards], })
  };

  render() {
    return (
      <Container style={{paddingTop: "25px"}}>
        <Header as="h1">Flash Cards</Header>
        <br />
        <FlashCardForm add={this.addCard} />
        <br />
        <FlashCards flashcards={this.state.flashcards} editCard={this.editCard} remove={this.removeCard} />
      </Container>
    );
  }
}

export default App;
