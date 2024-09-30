
import './App.css'
import NavbarHome from './components/NavbarHome'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import EventsPage from './Pages/Eventspage'
import Home from './Pages/Home'
import Footer from './components/Footer'

function App() {
  

  return (
        <BrowserRouter>
          <div className='bg-black font-Silkscreen m-0 p-0'>
            <NavbarHome/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/events" element={<EventsPage/>}/>
            </Routes>
            <Footer/>
          </div>
        </BrowserRouter>
  )
}

export default App
