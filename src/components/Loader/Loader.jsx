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
                showLoader &&  <div className="loader">
                <div className="square" id="sq1"></div>
                <div className="square" id="sq2"></div>
                <div className="square" id="sq3"></div>
                <div className="square" id="sq4"></div>
                <div className="square" id="sq5"></div>
                <div className="square" id="sq6"></div>
                <div className="square" id="sq7"></div>
                <div className="square" id="sq8"></div>
                <div className="square" id="sq9"></div>
              </div>
            }
            
        </div>
       
    )
}
export default Loader