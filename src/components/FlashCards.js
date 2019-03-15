import React from 'react';
import FlashCard from './FlashCard';
import FlashCardForm from './FlashCardForm';
import { Container, Header, Grid } from 'semantic-ui-react';

class FlashCards extends React.Component {
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
    const { flashcards } = this.state

    return (
      <Container style={{paddingTop: "25px"}}>
        <Header as="h1" inverted>Flash Cards</Header>
        <br />
        <FlashCardForm addCard={this.addCard} editCard={this.editCard} />
        <br />
        <Grid columns={3}>
          <Grid.Row>
            {
            flashcards.map( flashcard => (
              <Grid.Column key={flashcard.id} style={{padding: '5px'}}>
                <FlashCard  {...flashcard} removeCard={this.removeCard} />
              </Grid.Column>
              ))
            }
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default FlashCards;