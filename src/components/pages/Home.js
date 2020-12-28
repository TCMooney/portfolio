import React from 'react';

import Portfolio from '../portfolio/Portfolio';
import About from './About';
import Contact from './Contact';

export default function Home() {
  return (
    <div className='home-container'>
      <About />
      <Portfolio />
      <Contact />
    </div>
  )
}
