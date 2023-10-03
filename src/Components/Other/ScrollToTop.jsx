import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';


const ScrollToTop = () => {
    const {pathName} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathName])
  return null
}

export default ScrollToTop