import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ContactForm from './Components/Contact/Contact';
import RegistrationForm from './Components/Registration/Registration';
import Conference from './Components/Conference/Conference';
import Explore from './Components/Explore/Explore';
import Content from './Components/Content/Content';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

const App = () => {
  return (
    <div>
      <ScrollToTop/>
    <Navbar/>
    <Routes>
    <Route path="/" element={<div><Conference /><Explore /><ContactForm /></div>} />
        <Route path="Conference" element={<Conference />} />
        <Route path="Explore" element={<Explore />} />
        <Route path="Contact" element={<ContactForm />} />
        <Route path="Registration" element={<RegistrationForm />} />
        <Route path="Content" element={<Content />} />
        <Route path="Conference/Content" element={<Content/>}/>
        <Route path="Conference/Content/contact" element={<ContactForm/>}/>
        <Route path="Conference/Content" element={<Content/>}/>
        <Route path="Content/Contact" element={<ContactForm/>}/>
    </Routes>
    <Footer/>
   </div>
  );
};

export default App;

