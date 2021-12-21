import Nav from './components/Nav/index';
import About from './components/About/index';
import Contact from './components/Contact/index';
import Portfolio from './components/Portfolio/index'
import { Container } from '@mui/material';
import { useState } from 'react';


function App() {

  const [currentPage, setCurrentPage] = useState('About Me')
  return (
    <>
    <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    <main>
      {currentPage ==='About Me' && <About/> }
      {currentPage === 'Contact Me' && <Contact/>}
      <Portfolio/>
    </main>
    </>
  );
}

export default App;
