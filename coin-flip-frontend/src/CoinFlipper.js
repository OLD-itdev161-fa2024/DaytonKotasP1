import React, { useState } from "react";
import axios from "axios";

const CoinFlipper = () => {
  const [count, setCount] = useState(0);
  const [results, setResults] = useState([]);
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);

  const handleFlip = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/coinflip", {
        count,
      });
      setResults(response.data.results);
      setHeadsCount(response.data.headsCount);
      setTailsCount(response.data.tailsCount);
    } catch (error) {
      console.error("Error flipping coin:", error);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        placeholder="Enter number of flips"
      />
      <button onClick={handleFlip}>Flip Coin</button>
      <p>Heads: {headsCount}</p>
      <p>Tails: {tailsCount}</p>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default CoinFlipper;
