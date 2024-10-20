import React from 'react';

const Score = ({ score, onRetry }) => {
  return (
    <div className="Score" style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Your Final Score is: {score}</h2>
      <button onClick={onRetry}>Attempt Again</button>
    </div>
  );
};

export default Score;
