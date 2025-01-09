import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [backgroundChanged, setBackgroundChanged] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [brand, setBrand] = useState("/src/assets/1.jpeg")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBackgroundChanged(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (backgroundChanged) {
      setShowLogo(true);
    }
  }, [backgroundChanged]);

  const changeBrandWithDelay = () => {
    setBrand("/src/assets/1.jpeg");

    setTimeout(() => {
      setBrand("/src/assets/2.jpeg");
    }, 500);

    setTimeout(() => {
      setBrand("/src/assets/1.jpeg");
    }, 1000);

    setTimeout(() => {
      setBrand("/src/assets/2.jpeg");
    }, 1500);

    setTimeout(() => {
      setBrand("/src/assets/1.jpeg");
    }, 2000);

    setTimeout(() => {
      setBrand("/src/assets/2.jpeg");
    }, 2500);

    setTimeout(() => {
      setBrand("/src/assets/1.jpeg");
    }, 3000);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      changeBrandWithDelay();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="app-container">
      <div className={`top-third ${backgroundChanged ? 'red-background' : ''}`}>
        {showLogo && (
          <img src="/src/assets/logo.png" alt="Logo" className="logo" />
        )}
      </div>
      <div className={`mid-third ${backgroundChanged ? 'green-background' : ''}`}>
        {showLogo && (
          <h1 className='text'>House of BAGGA Presents...</h1>
        )}
      </div>
      <div className={`bot-third`}>
        {showLogo && (
          <img src={brand} alt="brand" className="brand" />
        )}
      </div>
    </div >
  );
}

export default App;
