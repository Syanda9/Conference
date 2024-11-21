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
import Speakers from './Components/Speaker/Speaker'



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
      
        <Conference onMoreInfo={()=> handleViewChange('content')}/>
        <Explore/>
        <ContactForm/>
        </div>
        )}
       
        {currentView ==='conference' && <Conference onMoreInfo={()=> handleViewChange('content')}/>}
        {currentView === 'explore' && <Explore/>}
        {currentView === 'contact' && <ContactForm/>}
        {currentView === 'content' && <Content/>}
        {currentView === 'registration' && <RegistrationForm/>}
      <Footer/>
    </div>
  )
}

export default App
