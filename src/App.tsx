
import './App.css'
import NavbarHome from './components/NavbarHome'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import EventsPage from './Pages/Eventspage'
import Home from './Pages/Home'
import Footer from './components/Footer'
import EventDetails from './components/EventDetails'
import TeamPage from './Pages/TeamPage'
import GfgStreakChallenge from './Pages/GfgStreakChallenge'
import AboutPage from './Pages/Aboutpage'

function App() {
  

  return (
        <BrowserRouter>
          <div className='bg-black font-Silkscreen  m-0 p-0'>
            <NavbarHome/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/events" element={<EventsPage/>}/>
              <Route path='/events/:id' element={<EventDetails/>}/>
              <Route path='/team' element={<TeamPage/>}/>
              <Route path='/events/gfg-streak-challenge' element={<GfgStreakChallenge/>}/>
            </Routes>
            <Footer/>
          </div>
        </BrowserRouter>
  )
}

export default App
