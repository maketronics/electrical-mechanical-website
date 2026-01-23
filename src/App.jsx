import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MechanicalSystems from './pages/MechanicalSystems';

// App.jsx
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mechanical-systems" element={<MechanicalSystems />} />
      </Routes>
    </Router>
  );
}

export default App
