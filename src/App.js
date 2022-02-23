import React from 'react';
import {Routes, Route} from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
import Home from './components/Home/Home'
import About from './components/About/About';
import Academics from './components/Academics/Academics';
import Portfolio from './components/Portfolio/Portfolio';
import Utility from './components/Utility/Utility';
import Footer from './components/Footer/Footer';
import Recuperacion from './components/Recuperacion/Recuperacion';

function App() {
  return (
    <div className="App">
        <NavMenu />
        
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/academics" element={<Academics />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/utility" element={<Utility/>}></Route>
          <Route path="/footer" element={<Footer/>}></Route>
          <Route path="/recuperacion" element={<Recuperacion />}></Route>
        </Routes>
    </div>
  );
}

export default App;
