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


  return (
    <div>
        <Navbar setView={setCurrentView} />
        {currentView === 'home' && (
        <> 
        <Hero onRegisterNow={()=>setCurrentView('registration')}/>
        <Conference onMoreInfo={()=>setCurrentView('registration')}/>
        <Explore/>
        <ContactForm/>
        </>
        )}
        {currentView ==='hero' && <Hero onRegisterNow={()=> setCurrentView('registration')}/>}
        {currentView ==='conference' && <Conference onMoreInfo={()=> setCurrentView('registration')}/>}
        {currentView === 'explore' && <Explore/>}
        {currentView === 'contact' && <ContactForm/>}
        {currentView === 'registration' && <RegistrationForm/>}
      <Footer/>
    </div>
  )
}

export default App
