import React, { Component } from 'react';
import FlashCards from './FlashCards';
import './App.css';
import { Container, Header, } from "semantic-ui-react";

class App extends Component {
  state = {
    flashcards: [
      { id: 1, term: "State", answer: "Object which is one of the main features of React", },
    ],
  };

  render() {
    return (
      <Container>
        <Header as="h1">Flash Cards</Header>
        <br />
        <FlashCards flashcards={this.state.flashcards} />
      </Container>
    );
  }
}

export default App;
