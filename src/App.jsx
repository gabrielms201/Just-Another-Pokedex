import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import AppRoutes from './routes/AppRoutes';
import GlobalStyle from  './theme/GlobalStyle'

import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <AppRoutes />
        <GlobalStyle/>
      </Router>
    </div>
  );
}

export default App;
