import './Loader.css'
import { useState, useEffect } from 'react'

const Loader = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 1000);
  
      return () => {
        clearTimeout(timer);
      };
    }, []);
   
    return (
        
        <div className="loader-container">
            {
                showLoader &&  <div class="loader">
                <div class="square" id="sq1"></div>
                <div class="square" id="sq2"></div>
                <div class="square" id="sq3"></div>
                <div class="square" id="sq4"></div>
                <div class="square" id="sq5"></div>
                <div class="square" id="sq6"></div>
                <div class="square" id="sq7"></div>
                <div class="square" id="sq8"></div>
                <div class="square" id="sq9"></div>
              </div>
            }
            
        </div>
       
    )
}
export default Loader