/** @format */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import HouseCleaning from './pages/HouseCleaning';
import DeepCleaning from './pages/DeepCleaning';
import OfficeCleaning from './pages/OfficeCleaning';
import MoveInOutCleaning from './pages/MoveInOutCleaning';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/house' element={<HouseCleaning/>} />
          <Route path='/moveinout' element={<MoveInOutCleaning />} />
          <Route path='/office' element={<OfficeCleaning />} />
          <Route path='/deep' element={<DeepCleaning />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
