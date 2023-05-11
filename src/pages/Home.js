import React from 'react'
import Navbar from '../components/Navbar';
import Recipes from '../components/Recipes';
import Welcome from '../components/Welcome';
import Popular from '../components/Popular';
import Carousel from '../components/Carousel';
import Carousel2 from '../components/Carousel2';
import Footers from '../components/Footers';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
<Navbar/>
<Carousel />
  <Recipes />
  <Welcome />
  <Popular />
  <Contact />
  <Carousel2 />
  <Footers/>
    </>
  )
}
