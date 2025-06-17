import { useState } from 'react';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      setShowModal(false);
    }
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>Open Popup</button>

      {showModal && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-box">
            <button className="close-btn" onClick={() => setShowModal(false)}>✖</button>
            <p>Hello</p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
