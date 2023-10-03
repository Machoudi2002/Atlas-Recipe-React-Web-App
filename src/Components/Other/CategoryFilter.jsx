import { useState, useEffect } from 'react';
import CategoryItem from './CategoryItem';
import RecipeCard from './RecipeCard';
const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState("Beef"); 
  const [apiData, setApiData] = useState([])
  const [loaded, setLoaded] = useState(false);

  const categories = [
    'Beef',
    'Breakfast',
    'Chicken',
    'Dessert',
    'Lamb',
    'Pasta',
    'Seafood',
    'Side',
    'Starter',
    'Vegan',
    'Vegetarian',
  ];

  const fetchCategoryData = async (category) => {
    setLoaded(true);
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

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

  const handleActiveCategory = (category) => {
        setActiveCategory(category); 
        fetchCategoryData(category);
};

    useEffect(() => {
        fetchCategoryData(activeCategory);
    }, [])

  return (
    <div className="container">
      <h1 className="display-3 text-center my-3">Filter By Categories</h1>
      <div className="filter my-4">
        {categories.map((category, i) => (
          <div
            key={i}
            onClick={() => handleActiveCategory(category)} 
          >
            <CategoryItem
              buttonStyle={activeCategory === category ? 'active-category' : ''}
              CategoryTitle={category}
              CategoryPath={category}
            />
          </div>
        ))}
      </div>
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
                                            Category={activeCategory} 
                                            Link={recipe.idMeal}
                                        />

                                    </div>

                                )) : <h3 className='text-center'>No Result Found</h3>
                            }

                        </div>

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
    </div>
  );
};

export default CategoryFilter;
