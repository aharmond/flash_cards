import React from 'react';
import FlashCard from './FlashCard';

const FlashCards = ({ flashcards }) => (
  <div>
    {
      flashcards.map( flashcard => (
        <FlashCard key={flashcard.id} {...flashcard} />
      ))
    }
  </div>
)

export default FlashCards;