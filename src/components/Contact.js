import React from 'react'
import "../Styles.scss"

export default function Contact() {
  return (
    <>           
    <div className="Contact" id='Contact'>     
    <form>
    <h4>Stay in touch with us</h4>
    <h2>Join our Community !</h2>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />
  <br/>
  
  <input type="checkbox" id="subscribe" name="subscribe" value="yes" />
  <span>agree to Subscribe</span>
  <br />
  <button type="submit">Submit</button>
  <p>If you have a passion for food and love trying out new recipes, joining a food blog community can be a great way to connect with like-minded individuals and expand your culinary horizons. By participating in a food blog community, you can share your favorite recipes, get inspiration from others, and learn new cooking techniques and tips</p>
</form>
    </div>
    </> 
  )
}
