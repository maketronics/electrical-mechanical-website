import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import MechanicalSystems from './pages/MechanicalSystems';
import ElectricalAutomation from './pages/ElectricalAutomation';
import IndustriesServed from './pages/IndustriesServed';
import ExecutionSupport from './pages/ExecutionSupport';
import WhyMaketronics from './pages/WhyMaketronics';
import Contact from './pages/Contact';
import ServicesHubPage from './pages/ServicesHubPage';
import ServiceDetailRoute from './pages/ServiceDetailRoute';
import RegionalHubPage from './pages/RegionalHubPage';
import RegionalDetailRoute from './pages/RegionalDetailRoute';
import NotFoundPage from './pages/NotFoundPage';

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
        <Route path="/services" element={<ServicesHubPage />} />
        <Route path="/services/:slug" element={<ServiceDetailRoute />} />
        <Route path="/middle-east" element={<RegionalHubPage region="middle-east" />} />
        <Route path="/middle-east/:slug" element={<RegionalDetailRoute />} />
        <Route path="/south-africa" element={<RegionalHubPage region="south-africa" />} />
        <Route path="/south-africa/:slug" element={<RegionalDetailRoute />} />
        <Route path="/southeast-asia" element={<RegionalHubPage region="southeast-asia" />} />
        <Route path="/southeast-asia/:slug" element={<RegionalDetailRoute />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
