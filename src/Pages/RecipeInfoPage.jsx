import React, { useEffect, useState } from 'react'
import RecipeInfo from '../Components/Other/RecipeInfo'
import { useParams} from 'react-router-dom'
import NotFound from './NotFound'

const RecipeInfoPage = () => {
    const {MealId} = useParams()
    const [apiData, setApiData] = useState()
    const [action, setAction] = useState("")
    const [dataNull, setDataNull] = useState()

    const fetchMealData = async () => {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`;
      try {
        const response = await fetch(url); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        if (data.meals === null) {
          console.log('Meal ID not found');
          setDataNull(null)
          return;
        }
        else {
          setApiData(data.meals[0]);
        }
        
        
        
        
      } catch (error) {
        
        console.error("Error fetching data:", error);
      }
    }

    function removeMealIdFromFavorites(mealId) {
    
      const favorites = JSON.parse(localStorage.getItem('Favorites')) || [];
    
      const index = favorites.indexOf(mealId);
  
      if (index !== -1) {
        favorites.splice(index, 1); 
        localStorage.setItem('Favorites', JSON.stringify(favorites));
      }
    }

    const CheckDataIncludes = (mealId) => {

      const favorites = JSON.parse(localStorage.getItem('Favorites')) || [];
      if (!favorites.includes(mealId)) {
        setAction("Add To Favorites")
      } else {
        setAction("Remove From Favorites",)
      }

    }
    

    function saveMealIdToFavorites(mealId) {
      
      const favorites = JSON.parse(localStorage.getItem('Favorites')) || [];
      
      if (!favorites.includes(mealId)) {
        setAction("Remove From Favorites",)
        favorites.push(mealId);
        localStorage.setItem('Favorites', JSON.stringify(favorites));

      } else {
        setAction("Add To Favorites")
        removeMealIdFromFavorites(MealId)
         
        }
    }
    

    const handleSaveClick = () => {
      saveMealIdToFavorites(MealId);

    };
    
    useEffect(() => {
      fetchMealData();
      CheckDataIncludes(MealId);
    }, []);
    

  return (
    <div className='container'>
        {
          dataNull === null ? <NotFound /> : (
          apiData && <RecipeInfo 
                      Name={apiData.strMeal} 
                      Category={apiData.strCategory}
                      ImageURL={apiData.strMealThumb}
                      YoutubeLink={apiData.strYoutube}
                      Instr={apiData.strInstructions}
                      Ingri={
                        <ul>
                            {Array.from({ length: 15 }, (_, index) => {
                              const measure = apiData[`strMeasure${index + 1}`];
                              const ingredient = apiData[`strIngredient${index + 1}`];
                          
                              if (measure && ingredient) {
                                return (
                                  <li key={index}>
                                    {measure} of {ingredient}
                                  </li>
                                );
                              }
                          
                              return null;
                            })}
                        </ul>
                      
                      }

                      Action={() => handleSaveClick()}
                      ActionTitle={action}
                      
                      />
          )
      }
        
    </div>
  )
}

export default RecipeInfoPage
