import './App.css';
import { useState } from 'react';

function App() {
  const [randomNumber, setRandomNumber] = useState(null);

  const fetchRandomNumber = async () => {
    try {
      const response = await fetch('http://localhost:9000/random-number');
      const data = await response.json();
      setRandomNumber(data.number);
    } catch (error) {
      console.error('Error fetching the random number:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Random Number Generator</h1>
      <button onClick={fetchRandomNumber}>
        Get Random Number
      </button>
      {randomNumber !== null && (
        <p>Random Number: {randomNumber}</p>
      )}
    </div>
  );
}

export default App;
