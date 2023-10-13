import logo from './logo.svg';
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
