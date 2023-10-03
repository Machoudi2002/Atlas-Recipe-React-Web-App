import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./Pages/Home'));
const Random = lazy(() => import('./Pages/Random'));
const PrivacyPage = lazy(() => import('./Pages/PrivacyPage'));
const FavoritePage = lazy(() => import("./Pages/FavoritePage"));
const ContactUs = lazy(() => import('./Pages/ContactUs'));
const NotFound = lazy(() => import("./Pages/NotFound"));
const Category = lazy(() => import("./Pages/Category"));
const RecipeInfoPage = lazy(() => import("./Pages/RecipeInfoPage"));

import PreLoader from "./Components/Other/PreLoader"
import NavBar from "./Components/Static/NavBar";
import Footer from "./Components/Static/Footer";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      
      {isLoading ? <PreLoader /> :
        <div>
          <NavBar />
          <Suspense fallback={<PreLoader />}>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path="/Random" element={<Random />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/PrivacyPolicy" element={<PrivacyPage />} />
              <Route path="/:MealId" element={<RecipeInfoPage />} />
              <Route path="/Favorites" element={<FavoritePage />} />
              <Route path="/Favorites/:MealId" element={<RecipeInfoPage />} />
              <Route path="/Categories" element={<Category />} />
              <Route path="/Categories/:MealId" element={<RecipeInfoPage />} />
              <Route path="*" element={<NotFound />} />
          </Routes>

          </Suspense>
          <div className="footer">
                <Footer />  
          </div>

        </div>

      
      }

    </>
  )
}

export default App
