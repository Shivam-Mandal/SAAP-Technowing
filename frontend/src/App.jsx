import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExactNavbar from './components/ExactNavbar';
import ExactFooter from './components/ExactFooter';
import HomePage from './pages/HomePage';
import CareerPage from './pages/CareerPage';
import PricingPage from './pages/PricingPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <ExactNavbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/careers" element={<CareerPage />} />
          </Routes>
        </main>
        <ExactFooter />
      </div>
    </Router>
  );
}

export default App;
