import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { Nav, NavBar } from './components';
import { Home, Archive, ME, Work } from './pages';

function App() {

  return (
    <>
      <Router>
        <Nav />
        <NavBar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/me' element={<ME />} />
          <Route exact path='/archive' element={<Archive />} />
          <Route exact path='/work' element={<Work />} />
        </Routes>
      </Router>
    </>
  )
}

export default App


