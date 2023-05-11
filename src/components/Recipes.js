import React from 'react'
import "../Styles.scss"


export default function Recipes() {
  return (
    <div className='recipe' id="Recipes">
        <h4>Top Products</h4>
        <div className="flex">
            <div className='card'><img src="https://therecipecritic.com/wp-content/uploads/2023/03/chess-pie-6-667x1000.jpg" alt="" />
            <h5>Banana Cream Pie</h5></div>
            <div className='card'><img src="https://therecipecritic.com/wp-content/uploads/2022/08/bananacreampie-1-750x1000.jpg" alt="" />
            <h5>Banana Cream Pie</h5></div>
            <div className='card'><img src="https://therecipecritic.com/wp-content/uploads/2015/05/No-Bake-Strawberry-Cream-Pie-16.jpg" alt="" />
            <h5>Banana Cream Pie</h5></div>
        </div>

        <div className="flex">
            <div className='card'><img src="https://therecipecritic.com/wp-content/uploads/2023/03/air-fryer-cheesecake-2-2-667x1000.jpg" alt="" />
            <h5>Banana Cream Pie</h5></div>
            <div className='card'><img src="https://therecipecritic.com/wp-content/uploads/2023/03/funnel-cake-5-667x1000.jpg" alt="" />
            <h5>Banana Cream Pie</h5></div>
            <div className='card'><img src="https://therecipecritic.com/wp-content/uploads/2023/01/brownie-skillet-1-667x1000.jpg" alt="" />
            <h5>Banana Cream Pie</h5></div> 
        </div>
        <div>
        <button>More +</button></div>
    </div>
  )
}
