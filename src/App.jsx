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
        <Route path="conference" element={<Conference />} />
        <Route path="explore" element={<Explore />} />
        <Route path="contact" element={<ContactForm />} />
        <Route path="registration" element={<RegistrationForm />} />
        <Route path="content" element={<Content />} />
        <Route path="conference/content" element={<Content/>}/>
        <Route path="conference/content/contact" element={<ContactForm/>}/>
        <Route path="conference/content" element={<Content/>}/>
        <Route path="content/contact" element={<ContactForm/>}/>
    </Routes>
    <Footer/>
   </div>
  );
};

export default App;

