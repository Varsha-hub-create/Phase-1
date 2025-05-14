import React, { useState, useMemo, useCallback } from 'react';
import './App.css';

// Utility: Expensive prime number finder
function findPrimes(limit) {
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }
  return primes;
}

// Child component: memoized for performance
const ControlPanel = React.memo(({ onLimitChange, onReset }) => {
  console.log('Rendering ControlPanel');
  return (
    <div className="control-panel">
      <input
        type="number"
        onChange={(e) => onLimitChange(Number(e.target.value))}
        placeholder="Enter limit"
      />
      <button onClick={onReset}>Reset</button>
    </div>
  );
});

export default function PrimeCalculator() {
  const [limit, setLimit] = useState(10000);

  // Memoized expensive calculation
  const primeNumbers = useMemo(() => {
    console.log('Calculating primes...');
    return findPrimes(limit);
  }, [limit]);

  // Memoized event handlers
  const handleLimitChange = useCallback((newLimit) => {
    setLimit(newLimit);
  }, []);

  const handleReset = useCallback(() => {
    setLimit(10000);
  }, []);

  return (
    <div className="prime-container">
      <h1 className="prime-title">Prime Calculator</h1>
      <p className="prime-info">Current Limit: {limit}</p>
      <p className="prime-info">Number of Primes: {primeNumbers.length}</p>

      <ControlPanel onLimitChange={handleLimitChange} onReset={handleReset} />

      <div className="prime-list">
        {primeNumbers.slice(0, 100).map((prime, index) => (
          <span key={index} className="prime-number">{prime}</span>
        ))}
        {primeNumbers.length > 100 && (
          <p className="note">...only first 100 shown</p>
        )}
      </div>
    </div>
  );
}
