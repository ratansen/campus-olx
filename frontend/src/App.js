import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
    <Router>

      <Navbar />
      <Routes >
          <Route path = '/' exact element = {<Home />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
