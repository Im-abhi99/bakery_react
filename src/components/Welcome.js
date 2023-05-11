import React from 'react'
import "../Styles.scss"

export default function Welcome() {
  return (
    <div className='wel'>
        <div className="grid">
            <div className="flex">
                <p className='p1'>Pick of the Week</p>
                <p className='p2'>Juicy Raspberry Pie slice of raspberry pie with a homemade crust</p>
                <p className='p3'>The combination of the juicy, slightly tart raspberries with the buttery, flaky crust is a match made in dessert heaven. The texture of the filling is perfect, not too runny and not too thick, while the crust adds a satisfying crunch with each bite</p>
            </div>
            <div className="flex"><img src="https://images.squarespace-cdn.com/content/v1/59876b7417bffc6a271eba33/1507830198859-6UZGY91TWY8SQX9KS5GW/Raspberry+pie_1.jpg" alt="" />
            </div>
          
        </div>  <div><button>Learn more</button></div>
    </div>
  )
}
