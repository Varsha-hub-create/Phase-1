import './App.css';
import bgImage from './assets/bg.jpg';

export default function HelloWorld() {
  const name = "Varsha"; // Replace with your actual name
  
  return (
    <div className="a">
      <h3>Welcome to MyProfile!</h3>
      <p>Hello, {name}! <br></br>Idiosyncratic Ambitious Techie.</p>
      <img src={bgImage} alt="task" />
    </div>
  );
}
