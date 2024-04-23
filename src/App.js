import { useLocation } from 'react-router-dom';
import './App.css';
import Button from './Button';
import HomePage from './container/HomePage';
import { useState } from 'react';


function App() {
  const location = useLocation();
  console.log('location: ', location);

  function handleSave() {
    console.log('save')
  }

  function handleCancel() {
    console.log('cancel')
  }

  
  return (
    <div className="App">
      {location.pathname === '/' ?
        <div>
          <Button label="Save" onClick={handleSave} style={{ color: "red", backgroundColor: "black" }} />
          <Button label="Cancel" onClick={handleCancel} />
        </div>
        :
        <HomePage />
      }

      
    </div>
  );
}

export default App;
