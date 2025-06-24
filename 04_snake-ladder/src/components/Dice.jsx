import React from 'react';

function Dice({ roll, dice }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <button onClick={roll} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Roll Dice 🎲
      </button>
      {dice && <p>Rolled: {dice}</p>}
    </div>
  );
}

export default Dice;
