import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { Nav, NavBar, Footer } from './components';
import { Home, ME, Work, Wayaa, PortalCheck } from './pages';

function App() {

  return (
    <>
      <Router>
        <Nav />
        <NavBar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/me' element={<ME />} />
          <Route exact path='/work' element={<Work />} />
          <Route exact path='/wayaa' element={<Wayaa />} />
          <Route exact path='/portal-check' element={<PortalCheck />} />
        </Routes>


       <Footer />

      </Router>
    </>
  )
}

export default App


