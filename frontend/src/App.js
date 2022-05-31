import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Category from './pages/Category';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
    <Router>

      <Navbar />
      <Routes >
          <Route path = '/' exact element = {<Home />} />
          <Route path = '/category' element = {<Category />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
