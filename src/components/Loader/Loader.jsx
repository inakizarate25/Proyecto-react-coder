import './Loader.css'
import { useState, useEffect } from 'react'

const Loader = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 2000);
  
      return () => {
        clearTimeout(timer);
      };
    }, []);
   
    return (
        
        <div className="loader-container">
            {
                showLoader &&  <div className="loader">
                <div></div>
            </div>
            }
            
        </div>
       
    )
}
export default Loader