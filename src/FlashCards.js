import React from 'react';
import FlashCard from './FlashCard';
import { Grid } from 'semantic-ui-react';

const FlashCards = ({ flashcards, editCard, remove }) => (
  <Grid columns={3}>
    <Grid.Row>
      {
      flashcards.map( flashcard => (
        <Grid.Column style={{padding: '5px'}}>
          <FlashCard key={flashcard.id} flashcard={{...flashcard}} editCard={editCard} remove={remove} />
        </Grid.Column>
        ))
      }
    </Grid.Row>
  </Grid>
)

export default FlashCards;