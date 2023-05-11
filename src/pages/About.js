import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footers from '../components/Footers'
export default function About() {
  return (
    <>
    <Navbar/>
    <div className="about">
        <img src={require("../images/Artboard 1.png")} alt="" />
        <p className='p'>Welcome to Alec's Bakery, where passion and creativity come together to create the most delicious baked goods you've ever tasted. Our founder, Alec White, has always had a love for baking, even though he is profoundly dyslexic. He's turned his challenge into an opportunity to bring joy to others through his delicious creations. <br />
<br />
At Alec's Bakery, we believe in using only the best ingredients, sourced locally whenever possible. From our fluffy croissants to our mouthwatering cakes, everything is handmade from scratch with the utmost care and attention to detail. There's nothing quite like the taste of fresh, homemade baked goods, and we're committed to delivering that experience to our customers every time.
<br /><br />
We offer a wide variety of baked goods, from traditional favorites like cinnamon rolls and chocolate chip cookies to more unique treats like lavender macarons and rosemary focaccia. Whether you're looking for a morning pastry to pair with your coffee or a custom cake for a special occasion, we have something for everyone.</p>
    </div>
    <Contact />
    <Footers />
    </>
  )
}
