import './App.css';
import React from 'react';
import { useState } from 'react';
import Checkbox from './components/Checkbox';

function App() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  
  const handleChange1 = () => {
    setChecked1(!checked1);
  };

  const handleChange2 = () => {
    setChecked2(!checked2);
  };

  const handleChange3 = () => {
    setChecked3(!checked3);
  };

  const SumaPrecios = (e) => {
    let webPrice = checked1 ? 500 : 0;
    
    let seoPrice = checked2 ? 300 : 0;
  
    let googleAdsPrice = checked3 ? 200 : 0;
  
    const suma = webPrice + seoPrice + googleAdsPrice;
    return (
    <div>
      <p>Precio: {suma}€</p>
      </div>
    );
  }

  return (
    <div className="App">
      <p>Qué quieres hacer?</p>
      <div>
        <div>
          <Checkbox
            id="1"
            value="Una pàgina web (500€)"
            checked={checked1}
            onChange={handleChange1}
            />
        </div>
        <div>
          <Checkbox
            id="2"
            value ="Una consultoria SEO (300€)"
            checked={checked2}
            onChange={handleChange2}
            />
        </div>
        <div>
          <Checkbox
            id="3"
            value="Una campaña de Google Ads (200€)"
            checked={checked3}
            onChange={handleChange3}
            />
        </div>
        </div>
      <SumaPrecios/>
    </div>
  );
}

export default App;
