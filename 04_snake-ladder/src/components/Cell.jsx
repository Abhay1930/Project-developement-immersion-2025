import React from 'react';

function Cell({ number, player }) {
  const style = {
    width: '40px',
    height: '40px',
    border: '1px solid #555',
    backgroundColor: player ? '#4caf50' : '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px'
  };

  return <div style={style}>{number}</div>;
}

export default Cell;
