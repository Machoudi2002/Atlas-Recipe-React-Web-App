import React, {useState, useEffect} from 'react'
import NavBar from '../Components/Static/NavBar'
import Footer from '../Components/Static/Footer'
import RecipeInfo from '../Components/Other/RecipeInfo'
import Newsletter from '../Components/Other/Newsletter';

const Random = () => {

  const [apiData, setApiData] = useState()
  const [action, setAction] = useState("Add To Favorites")
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [loaded, setLoaded] = useState(false)
  

    const fetchMealData = async () => {
      setLoaded(true);
      const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
      try {
        const response = await fetch(url); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        setApiData(data.meals[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoaded(false); 
    }
    }

  
    // Function to remove a recipe from local storage
    const removeRecipeFromLocalStorage = (recipeId) => {
      // Remove the recipeId from the list
      const updatedRecipes = savedRecipes.filter((id) => id !== recipeId);
      setSavedRecipes(updatedRecipes);
      
  
      // Save the updated list back to local storage
      localStorage.setItem('Favorites', JSON.stringify(updatedRecipes));
    };

    const saveRecipeToLocalStorage = (recipeId) => {
      // Check if the recipeId is not already in the list
      if (!savedRecipes.includes(recipeId)) {
        // Add the recipeId to the list
        const updatedRecipes = [...savedRecipes, recipeId];
        setSavedRecipes(updatedRecipes);
        setAction("Remove From Favorites")
  
        // Save the updated list back to local storage
        localStorage.setItem('Favorites', JSON.stringify(updatedRecipes));
      }

      else {
        removeRecipeFromLocalStorage(recipeId);
        setAction("Add To Favorites")
      }
    };


    const handleSaveClick = (recipeId) => {
      saveRecipeToLocalStorage(recipeId);

    };

    const triggerRandomClick = () => {
      fetchMealData();
    }

    if (!localStorage.getItem('Favorites')) {
      localStorage.setItem('Favorites', JSON.stringify([]));
    }
    
    useEffect(() => {
      fetchMealData();

    }, []);
    

    useEffect(() => {
      const savedRecipesFromStorage = JSON.parse(localStorage.getItem('Favorites')) || [];
      setSavedRecipes(savedRecipesFromStorage);
    }, []);

  return (
    <>  
        <div className="container ">
          <div  className='text-center trigger-Random my-2'><span onClick={triggerRandomClick}>▶ Try Random Recipe ◀</span></div>
            { !loaded ? 
                (
                  apiData && <RecipeInfo 
                          Id={apiData.idMeal}
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
                              
                                  return null; // Skip if either measure or ingredient is missing
                                })}
                            </ul>
                          
                          }
                          Action={() => handleSaveClick(apiData.idMeal) }
                          ActionTitle={action}
                          />

                ) : (
                      <div className="loader-random">
                        <div className="loader ">
                            <li className="ball"></li>
                            <li className="ball"></li>
                            <li className="ball"></li>
                        </div>
                      </div>
   
                )
              
            }
            
        </div>
        <div className="newsletter-section">
            <Newsletter />
        </div>
    </>
  )
}

export default Random