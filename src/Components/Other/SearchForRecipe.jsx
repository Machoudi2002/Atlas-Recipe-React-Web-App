import React, { useEffect } from 'react'
import { useState } from 'react'
import RecipeCard from './RecipeCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



const SearchForRecipe = () => {
    const [inputValue, setInputValue] = useState("")
    const [apiData, setApiData] = useState([])
    const [loaded, setLoaded] = useState(false)
    

    const fetchApiData = async () => {
        setLoaded(true);
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
    
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setApiData(data.meals);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoaded(false);
        }
    }
    
    

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        
    }

    const submitSearchQuery = (event) => {
        event.preventDefault();
        fetchApiData();
        


    }

    useEffect(() => {
        fetchApiData();
    }, [])
  return (
    <>
        <section>
            <h2 className='display-3'>Explore Recipes</h2>
            <form onSubmit={submitSearchQuery}>
                <input type="text" placeholder='Search For Recipe ...' onChange={handleInputChange} />
                <button className='search-button' type='submit' aria-label='submit'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
            
            <div>
                {
                    !loaded ? (
                        <div className="results">
                            {
                                apiData ? apiData.map((recipe, i) => (
                                    <div key={i}>

                                        <RecipeCard 
                                            Id={recipe.idMeal} 
                                            ImageUrl={recipe.strMealThumb} 
                                            Name={recipe.strMeal} 
                                            Category={recipe.strCategory} 
                                            Link={recipe.idMeal}
                                        />

                                    </div>

                                )) : <h3>No Result Found</h3>
                            }

                        </div>

                    ) : (
                        <div className="loader">
                            <li className="ball"></li>
                            <li className="ball"></li>
                            <li className="ball"></li>
                        </div>
                    )
                }


            </div>
        </section>


        

    </>
  )
}

export default SearchForRecipe