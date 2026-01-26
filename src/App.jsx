import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import MechanicalSystems from './pages/MechanicalSystems';
import ElectricalAutomation from './pages/ElectricalAutomation';
import IndustriesServed from './pages/IndustriesServed';
import ExecutionSupport from './pages/ExecutionSupport';
import WhyMaketronics from './pages/WhyMaketronics';
import Contact from './pages/Contact';

// App.jsx
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mechanical-systems" element={<MechanicalSystems />} />
        <Route path="/electrical-automation" element={<ElectricalAutomation />} />
        <Route path="/industries" element={<IndustriesServed />} />
        <Route path="/execution-support" element={<ExecutionSupport />} />
        <Route path="/why-maketronics" element={<WhyMaketronics />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App
