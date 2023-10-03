import React from 'react'
import { useNavigate } from 'react-router-dom'

const RecipeCard = ({Id, ImageUrl, Name, Category, Link, Comp, Style}) => {
  let navigate = useNavigate()
  return (
    <>
        <div className="card" key={Id}  >
            <img src={ImageUrl} alt={Name}/>
            <div className="content" onClick={() => navigate(`${Link}`)}>
                <h3>{Name}</h3>
                <span>{Category}</span>
            </div>
            <div className={Style}>{Comp}</div>
        </div>
    </>
  )
}

export default RecipeCard