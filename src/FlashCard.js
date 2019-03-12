import React from 'react';

const FlashCard = ({ id, term, answer }) => (
  <div>
    <div>{term}</div>
    <div>{answer}</div>
    <button>Edit</button>
    <button>Delete</button>
  </div>
);

export default FlashCard;