// QuoteButton.js
import React from 'react';

const QuoteButton = ({ calculateQuote }) => {
  return <button onClick={calculateQuote}>Cotizar</button>;
};

export default QuoteButton;
