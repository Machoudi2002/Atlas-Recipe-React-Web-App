import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuffle, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const NavBar = () => {


  return (
    <div className='container'>
        <nav className='navbar '>
          <Link to="/" className='navbar-brand'>
            <img src="logo.png" alt="logo" width="130px"/>
          </Link>
          <div className='navicons'>
            <Link aria-label='toRandomRecipe' to="/Random"><FontAwesomeIcon className='navicon' icon={faShuffle} /></Link> 
            <Link aria-label='toPageFavorites' to="/Favorites" ><FontAwesomeIcon className='navicon' icon={faStar} /></Link>
          </div>

        </nav>
    </div>
  )
}

export default NavBar