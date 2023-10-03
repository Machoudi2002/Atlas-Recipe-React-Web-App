import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
        <div className="container">
          
          <footer>
            <div className="info">
              <Link to="/"><img src="logo.png" alt="Atlas Recipes" /></Link>
              <p>we're passionate about taking you on a culinary voyage that spans the globe. 
                Our kitchen is your passport to a world of flavors, 
                where each recipe is a gateway to the rich and diverse tapestry of global cuisine. 
                Join us in exploring the aromas, tastes, and traditions that make every meal an adventure. Bon appétit!
              </p>
              <div className="social">
                <a aria-label="Youtube Channel" href="https://www.youtube.com/@bohemiankitchen/featured" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
                <a aria-label="Instagram Page" href="https://www.instagram.com/bohemiankitchen_official/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                <a aria-label="TikTok Account" href="https://www.tiktok.com/@bohkitchen" target="_blank"><FontAwesomeIcon icon={faTiktok} /></a>

              </div>
            </div>
            <div className="link-list list-1">
              <h4>Pages</h4>
              <ul>
                <li >
                  <Link className='nav-link' aria-label="Home Link" to="/">Home</Link>
                </li>
                <li>
                  <Link className='nav-link' aria-label="Random Link" to="/Random">Random Recipe</Link>
                </li>
                <li>
                  <Link className='nav-link' aria-label="Favorites Link" to="/Favorites">Favorites Recipes</Link>
                </li>
                <li>
                  <Link className='nav-link' aria-label="Categories Link" to="/Categories">Categories</Link>
                </li>
                <li>
                  <Link className='nav-link' aria-label="ContactUs Link" to="/ContactUs">Contact Us</Link>
                </li>
                <li>
                  <Link className='nav-link' aria-label="PrivacPolicy Link" to="/PrivacyPolicy">Privacy Policy</Link>
                </li>
              </ul>
            </div>



          </footer>
          <div className="copyright">
            © Copyright 2023 - Atlas Recipes Inc. All rights reserved
          </div>

              
        </div>    
                
  )
}

export default Footer