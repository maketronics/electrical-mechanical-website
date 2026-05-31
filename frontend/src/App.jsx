import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import PageUiEnhancer from './components/PageUiEnhancer';
import Home from './pages/Home';
import MechanicalSystems from './pages/MechanicalSystems';
import ElectricalAutomation from './pages/ElectricalAutomation';
import CrushingPlantElectricalIntegration from './pages/CrushingPlantElectricalIntegration';
import ScreeningPlantEngineeringCompany from './pages/ScreeningPlantEngineeringCompany';
import JawStationIntegration from './pages/JawStationIntegration';
import CrushingPlantCommissioningMiddleEast from './pages/CrushingPlantCommissioningMiddleEast';
import GccHardRockProcessing from './pages/GccHardRockProcessing';
import VietnamQuarryPlantIntegration from './pages/VietnamQuarryPlantIntegration';
import IndonesiaMiningConveyorIntegration from './pages/IndonesiaMiningConveyorIntegration';
import SouthAfricaCrushingPlantEngineering from './pages/SouthAfricaCrushingPlantEngineering';
import CrusherStationFabrication from './pages/CrusherStationFabrication';
import ConeCrusherStructuralMounting from './pages/ConeCrusherStructuralMounting';
import MiningConveyorSystemDesign from './pages/MiningConveyorSystemDesign';
import VfdSystemsConveyors from './pages/VfdSystemsConveyors';
import VibratingScreenFabrication from './pages/VibratingScreenFabrication';
import WearProtectionSystems from './pages/WearProtectionSystems';
import CrusherDischargeChuteEngineering from './pages/CrusherDischargeChuteEngineering';
import MccPanelFabricationMining from './pages/MccPanelFabricationMining';
import PlcProgrammingQuarryPlants from './pages/PlcProgrammingQuarryPlants';
import IndustrialControlPanelsMining from './pages/IndustrialControlPanelsMining';
import BulkMaterialHandlingSystemIntegrator from './pages/BulkMaterialHandlingSystemIntegrator';
import IndependentSystemIntegrator from './pages/IndependentSystemIntegrator';
import MobileCrushingPlantIntegration from './pages/MobileCrushingPlantIntegration';
import IndustriesServed from './pages/IndustriesServed';
import ExecutionSupport from './pages/ExecutionSupport';
import LinkedPlaceholderPage from './pages/LinkedPlaceholderPage';
import WhyMaketronics from './pages/WhyMaketronics';
import Contact from './pages/Contact';

// App.jsx
function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageUiEnhancer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mechanical-systems" element={<MechanicalSystems />} />
        <Route path="/services/mechanical-systems" element={<MechanicalSystems />} />
        <Route path="/services/mechanical-systems/" element={<MechanicalSystems />} />
        <Route path="/electrical-automation" element={<ElectricalAutomation />} />
        <Route path="/services/electrical-automation" element={<ElectricalAutomation />} />
        <Route path="/services/electrical-automation/" element={<ElectricalAutomation />} />
        <Route path="/crushing-plant-electrical-integration" element={<CrushingPlantElectricalIntegration />} />
        <Route path="/crushing-plant-electrical-integration/" element={<CrushingPlantElectricalIntegration />} />
        <Route path="/screening-plant-engineering-company" element={<ScreeningPlantEngineeringCompany />} />
        <Route path="/screening-plant-engineering-company/" element={<ScreeningPlantEngineeringCompany />} />
        <Route path="/industries" element={<IndustriesServed />} />
        <Route path="/industries/" element={<IndustriesServed />} />
        <Route path="/approach" element={<ExecutionSupport />} />
        <Route path="/approach/" element={<ExecutionSupport />} />
        <Route path="/execution-support" element={<ExecutionSupport />} />
        <Route path="/why-maketronics" element={<WhyMaketronics />} />
        <Route path="/why-maketronics/" element={<WhyMaketronics />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/jaw-station-integration/" element={<JawStationIntegration />} />
        <Route path="/crusher-station-fabrication/" element={<CrusherStationFabrication />} />
        <Route path="/services/crusher-station-fabrication/" element={<CrusherStationFabrication />} />
        <Route path="/services/crusher-station-fabrication" element={<CrusherStationFabrication />} />
        <Route path="/middle-east/crushing-plant-engineering/" element={<GccHardRockProcessing />} />
        <Route path="/middle-east/crushing-plant-engineering" element={<GccHardRockProcessing />} />
        <Route path="/south-africa/crushing-plant-engineering/" element={<SouthAfricaCrushingPlantEngineering />} />
        <Route path="/south-africa/crushing-plant-engineering" element={<SouthAfricaCrushingPlantEngineering />} />
        <Route path="/southeast-asia/crushing-plant-engineering/" element={<VietnamQuarryPlantIntegration />} />
        <Route path="/southeast-asia/crushing-plant-engineering" element={<VietnamQuarryPlantIntegration />} />
        <Route path="/cone-crusher-structural-mounting/" element={<ConeCrusherStructuralMounting />} />
        <Route path="/vibrating-screen-fabrication/" element={<VibratingScreenFabrication />} />
        <Route path="/mining-conveyor-system-design/" element={<MiningConveyorSystemDesign />} />
        <Route path="/wear-protection-systems/" element={<WearProtectionSystems />} />
        <Route path="/crusher-discharge-chute-engineering/" element={<CrusherDischargeChuteEngineering />} />
        <Route path="/mcc-panel-fabrication-mining/" element={<MccPanelFabricationMining />} />
        <Route path="/plc-programming-quarry-plants/" element={<PlcProgrammingQuarryPlants />} />
        <Route path="/industrial-control-panels-mining/" element={<IndustrialControlPanelsMining />} />
        <Route path="/vfd-systems-conveyors/" element={<VfdSystemsConveyors />} />
        <Route path="/gcc-hard-rock-processing/" element={<GccHardRockProcessing />} />
        <Route path="/vietnam-quarry-plant-integration/" element={<VietnamQuarryPlantIntegration />} />
        <Route path="/indonesia-mining-conveyor-integration/" element={<IndonesiaMiningConveyorIntegration />} />
        <Route path="/south-africa-crushing-plant-engineering/" element={<SouthAfricaCrushingPlantEngineering />} />
        <Route path="/bulk-material-handling-system-integrator/" element={<BulkMaterialHandlingSystemIntegrator />} />
        <Route path="/independent-system-integrator/" element={<IndependentSystemIntegrator />} />
        <Route path="/mobile-crushing-plant-integration/" element={<MobileCrushingPlantIntegration />} />
        <Route path="/crushing-plant-commissioning-middle-east/" element={<CrushingPlantCommissioningMiddleEast />} />
      </Routes>
    </Router>
  );
}

export default App
