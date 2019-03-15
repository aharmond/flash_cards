import React from 'react';
import FlashCard from './FlashCard';
import { Grid } from 'semantic-ui-react';

const FlashCards = ({ flashcards, remove, editCard }) => (
  <Grid columns={3}>
    <Grid.Row>
      {
      flashcards.map( flashcard => (
        <Grid.Column key={flashcard.id} style={{padding: '5px'}}>
          <FlashCard  {...flashcard} edit={editCard} remove={remove} />
        </Grid.Column>
        ))
      }
    </Grid.Row>
  </Grid>
)

export default FlashCards;