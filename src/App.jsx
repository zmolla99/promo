import { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/logo.png';
import brand1 from './assets/1.jpeg';
import brand2 from './assets/2.jpeg';


function App() {
  const [backgroundChanged, setBackgroundChanged] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [brand, setBrand] = useState(brand1)

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
    setBrand(brand1);

    setTimeout(() => {
      setBrand(brand2);
    }, 500);

    setTimeout(() => {
      setBrand(brand1);
    }, 1000);

    setTimeout(() => {
      setBrand(brand2);
    }, 1500);

    setTimeout(() => {
      setBrand(brand1);
    }, 2000);

    setTimeout(() => {
      setBrand(brand2);
    }, 2500);

    setTimeout(() => {
      setBrand(brand1);
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
          <img src={logo} alt="Logo" className="logo" />
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
