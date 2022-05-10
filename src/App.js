import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Page/About/About';
import Appointment from './Page/Appointment/Appointment';
import ContactUs from './Page/ContactUs/ContactUs';
import Home from './Page/Home/Home';
import Login from './Page/Login/Login';
import Reviews from './Page/Reviews/Reviews';
import Navbar from './Page/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
