// LoadingScreen.js
import React, { useState ,useEffect} from 'react';

const LoadingScreen = () => {

    const [loading,setLoading] = useState(false);

    useEffect(() => {
        // Simulate a loading delay (you can replace this with your actual loading logic)
        const loadingTimeout = setTimeout(() => {
          setLoading(true);
        }, 500); // 3 seconds
    
        // Clean up the timeout to avoid memory leaks
        return () => clearTimeout(loadingTimeout);
      }, []);


  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 z-50 transition-colors duration-1000 ${
        loading ? 'text-white' : 'text-gray-600'
      }`}
    >
      <div className="text-6xl font-[900]">PIMR</div>
    </div>
  );
};

export default LoadingScreen;
