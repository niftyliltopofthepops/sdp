
import { Route, Routes } from 'react-router-dom';
import WelcomePage from './screens/front-end/Welcome';
import ShuttleEntry from './screens/front-end/ShuttleEntry';
import CyberCityMenu from './screens/front-end/CyberCityMenu';
import MissionMenu from './screens/front-end/MissionMenu';
import Login from './screens/front-end/Login';
import SpaceAcadEnt from './screens/entrypages/SpaceAcadEnt';
import QuantLBEnt from './screens/entrypages/QuantLBEnt';
import EcoGenEnt from './screens/entrypages/EcoGenEnt';
import SpcBeginner from './screens/spc_msn/SpcBeginner';
import SpcNTMDT from './screens/spc_msn/SpcNTMDT';
import SpcAdvanced from './screens/spc_msn/SpcAdvanced';
import QLbBeginner from './screens/qlb_msn/QLbBeginner';
import QLbNTMDT from './screens/qlb_msn/QLbNTMDT';
import QLbAdvanced from './screens/qlb_msn/QLbAdvanced';
import Signup from './screens/front-end/Signup';


const App = () => {


  return (
  
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="shuttle_entry" element={<ShuttleEntry/>} />
        <Route path="ccs_menu" element={<CyberCityMenu/>} />
        <Route path="login" element={<Login/>} />
        <Route path="msn_menu" element={<MissionMenu/>} />
        <Route path="sc_entry" element={<SpaceAcadEnt/>} />
        <Route path="qntm_entry" element={<QuantLBEnt/>} />
        <Route path="egn_entry" element={<EcoGenEnt/>} />
        <Route path="spc_beginner" element={<SpcBeginner/>} />
        <Route path="spc_intermediate" element={<SpcNTMDT/>} />
        <Route path="spc_advanced" element={<SpcAdvanced/>} />
        <Route path="qlb_beginner" element={<QLbBeginner/>} />
        <Route path="qlb_intermediate" element={<QLbNTMDT/>} />
        <Route path="qlb_advanced" element={<QLbAdvanced/>} />
        <Route path="register" element={<Signup/>} />
      </Routes>
    
    </>
  
  )

}

export default App;
