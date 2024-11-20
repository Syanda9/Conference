import React,{useState} from 'react'

import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Overview from './Components/Overview/Overview'
import Footer from './Components/Footer/Footer'
import ContactForm from './Components/Contact/Contact'
import RegistrationForm from './Components/Registration/Registration'
import Conference from './Components/Conference/Conference'
import Explore from './Components/Explore/Explore'
import Content from './Components/Content/Content'



const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const handleViewChange = (view) => {
    setCurrentView(view);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div>
        <Navbar setView={handleViewChange}/>
        {currentView ==='home' && (
        <div>
        <Hero onRegisterNow={()=> handleViewChange('registration')}/>
        <Conference onMoreInfo={()=> handleViewChange('registration')}/>
        <Explore/>
        <ContactForm/>
        </div>
        )}
        {currentView ==='hero' && <Hero onRegisterNow={()=> handleViewChange('registration')}/>}
        {currentView ==='conference' && <Conference onMoreInfo={()=> handleViewChange('registration')}/>}
        {currentView === 'explore' && <Explore/>}
        {currentView === 'contact' && <ContactForm/>}
        {currentView === 'registration' && <RegistrationForm/>}
      <Footer/>
    </div>
  )
}

export default App
