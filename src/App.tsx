import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/styles/App.scss'

import Header from './components/Header/Header'
import HomePage from './pages/HomePage';
import Portfolio from './pages/Portafolio';
import Footer from './components/Footer/Footer';
function App() {

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App
