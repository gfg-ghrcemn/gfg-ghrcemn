
import './App.css'
import NavbarHome from './components/NavbarHome'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import EventsPage from './Pages/Eventspage'
import Home from './Pages/Home'
import Footer from './components/Footer'
import EventDetails from './components/EventDetails'
import TeamPage from './Pages/TeamPage'

function App() {
  

  return (
        <BrowserRouter basename='/gfg-ghrcemn'>
          <div className='bg-black font-Silkscreen m-0 p-0'>
            <NavbarHome/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/events" element={<EventsPage/>}/>
              <Route path='/events/:id' element={<EventDetails/>}/>
              <Route path='/team' element={<TeamPage/>}/>
            </Routes>
            <Footer/>
          </div>
        </BrowserRouter>
  )
}

export default App
