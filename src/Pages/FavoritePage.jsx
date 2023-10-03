import FavoriteComponent from '../Components/Other/FavoriteComponent'
import Newsletter from '../Components/Other/Newsletter'


const FavoritePage = () => {
      
  return (
    <>
            <div className='container my-4'>
                <h1 className='text-center display-3 mb-5'>Favorite Recipes</h1>
                <FavoriteComponent />
            </div>
            <div className="newsletter-section mt-5">
              <Newsletter />
            </div>

    </>
  )
}

export default FavoritePage