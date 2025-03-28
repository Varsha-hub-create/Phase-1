import './App.css';

export default function Calculator() {
  const num1 = 10;
  const num2 = 5;
  const sum = num1 + num2; // Performing the calculation

  return (
    <div className="calculator">
      <h2>Simple Calculation</h2>
      <p>The sum of {num1} and {num2} is: <strong>{sum}</strong></p>
    </div>
  );
}
