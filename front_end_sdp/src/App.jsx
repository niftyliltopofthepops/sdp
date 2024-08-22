
import { Route, Routes } from 'react-router-dom';
import WelcomePage from './screens/front-end/Welcome';
import ShuttleEntry from './screens/front-end/ShuttleEntry';
import CyberCityMenu from './screens/front-end/CyberCityMenu';
import MissionMenu from './screens/front-end/MissionMenu';
import Login from './screens/front-end/Login';


const App = () => {


  return (
  
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="shuttle_entry" element={<ShuttleEntry/>} />
        <Route path="ccs_menu" element={<CyberCityMenu/>} />
        <Route path="login" element={<Login/>} />
        <Route path="msn_menu" element={<MissionMenu/>} />
      </Routes>
    
    </>
  
  )

}

export default App;
