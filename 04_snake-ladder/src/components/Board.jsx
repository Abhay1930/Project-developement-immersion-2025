import React, { useState } from 'react';
import Cell from './Cell';
import Dice from './Dice';

const boardSize = 100;
const snakes = { 16: 6, 48: 26, 49: 11, 56: 53, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78 };
const ladders = { 1: 38, 4: 14, 9: 31, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 80: 100 };

function Board() {
  const [position, setPosition] = useState(1);
  const [dice, setDice] = useState(null);

  const rollDice = () => {
    const roll = Math.ceil(Math.random() * 6);
    setDice(roll);
    let next = position + roll;

    if (next > 100) return;

    if (snakes[next]) next = snakes[next];
    if (ladders[next]) next = ladders[next];

    setPosition(next);
  };

  const cells = Array.from({ length: boardSize }, (_, i) => {
    const cellNumber = boardSize - i;
    return (
      <Cell key={cellNumber} number={cellNumber} player={position === cellNumber} />
    );
  });

  return (
    <div>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(10, 40px)', 
        gridTemplateRows: 'repeat(10, 40px)', 
        gap: '2px' 
      }}>
        {cells}
      </div>
      <Dice roll={rollDice} dice={dice} />
    </div>
  );
}

export default Board;
