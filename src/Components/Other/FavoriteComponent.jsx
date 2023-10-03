import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

const FavoriteComponent = () => {
  const [favorites, setFavorites] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [rerender, setRerender] = useState(false);
  const [loaded, setLoaded] = useState(false)

  const getFavoritesFromLocalStorage = () => {
    const favorites = JSON.parse(localStorage.getItem('Favorites')) || [];
    return favorites;
  };

  const fetchMealDetails = async (mealId) => {
    setLoaded(true);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch meal details for ID ${mealId}`);
      }

      const data = await response.json();
      return data.meals[0]; 
    } catch (error) {
      return null;
    } finally {
      setLoaded(false);
    }
  };

  const removeFavorite = (mealId) => {
    
    const updatedFavorites = favorites.filter((id) => id !== mealId);
    setFavorites(updatedFavorites);

    const storedFavorites = getFavoritesFromLocalStorage();
    const updatedStoredFavorites = storedFavorites.filter((id) => id !== mealId);
    localStorage.setItem('Favorites', JSON.stringify(updatedStoredFavorites));
    setRerender(!rerender);
  };

  useEffect(() => {
    const storedFavorites = getFavoritesFromLocalStorage();
    setFavorites(storedFavorites);

    Promise.all(storedFavorites.map((mealId) => fetchMealDetails(mealId)))
      .then((mealDetails) => {
        const validMealDetails = mealDetails.filter((meal) => meal !== null);
        setFavoriteRecipes(validMealDetails);
      });
    
  }, [rerender]);

  return (
    <>
      {
        !loaded ? (
          favoriteRecipes.length > 0 ? (
            <div className="results">
              {
                  favoriteRecipes.map((recipe, i) => (
                    <div key={i}>
                      <RecipeCard
                        Id={recipe.idMeal}
                        Name={recipe.strMeal}
                        Category={recipe.strCategory}
                        ImageUrl={recipe.strMealThumb}
                        Link={recipe.idMeal}
                        Style="delete-recipe"
                        Comp={
                          <div>
                              <FontAwesomeIcon onClick={() => removeFavorite(recipe.idMeal)} icon={faTrash} />
                          </div>
                        }
                      />
                    </div>
                    ))
                      }
              </div> )
              : ( <h3 className='text-center'>No Favorite Recipe Found</h3> )
          
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
      
    </>
  );
};

export default FavoriteComponent;
