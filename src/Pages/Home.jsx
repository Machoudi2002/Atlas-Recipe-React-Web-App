
import SearchForRecipe from '../Components/Other/SearchForRecipe'
import Newsletter from '../Components/Other/Newsletter';
import YoutubeSection from '../Components/Other/YoutubeSection';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>

        <header className='container' >
          <main>
              <h1 className='display-1'>Health Requires, Healthy Food</h1>
              <p>
                Welcome to our kitchen, where we're cooking up unforgettable culinary adventures for your taste buds. 
                Join us in creating food magic, one scrumptious bite at a time!
              </p>
              <button className='animated-button' aria-label="ToCategory"><Link to="/Categories">Explore Categories</Link></button>
          </main>
          
        </header>
        <div className="recipe-section" id='recipe-section'>
          <div className='container'>
            <SearchForRecipe />
          </div>
        </div>
        <div className="youtube-videos-section">
          <YoutubeSection />
        </div>
        
        <div className="newsletter-section">
            <Newsletter />
        </div>

        
    </div>
  )
}

export default Home