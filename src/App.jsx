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
import Terms from './Components/Terms/Terms';
import WebhookRegistration from './Components/Webhook/Webhook';
import List from './Components/listWebhook/listWebhook';
import Speakers from './Components/Speaker/Speaker';

const App = () => {
  return (
    <div>
      <ScrollToTop/>
      <Navbar/>
      <Conference/>
      <Content/>
      <Explore/>
      <ContactForm/>
      
    <Footer/>
    </div>
   
  );
};

export default App;

