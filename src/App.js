import React, { useState } from 'react';
import  './App.css'

const LampControl = () => {
  const [isLocked, setIsLocked] = useState(false);
  const [lampColor, setLampColor] = useState('red');

  const handleUnlock = () => {
    setIsLocked(false);
  };

  const handleLock = () => {
    setIsLocked(true);
  };

  const changeLampColor = () => {
    if (!isLocked) {
      const newColor = getRandomColor();
      setLampColor(newColor);
    }
  };

  const getRandomColor = () => {
    // Basit bir şekilde rastgele renk üretimi için
    const colors = ['red', 'green', 'blue', 'yellow'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div className='lamp'>
      <div style={{ backgroundColor: lampColor, width: '100px', height: '100px', margin: '20px', border: '1px solid #000' }}></div>
      <button className='btn1' onClick={changeLampColor}>Change color</button>
      <button className='btn2' onClick={handleLock}>Lock</button>
      <button className='btn3' onClick={handleUnlock}>Unlock</button>
    </div>
  );
};

export default LampControl;
