import './App.css';
import React from 'react';
import { useState } from 'react';
import Checkbox from './components/Checkbox';
import SumaPrecios from './components/SumaPrecios';
import ServiciosWeb from './components/ServiciosWeb';

function App() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);

  const handleInput1 = (e) => {
    setInput1(e.target.value);
  }
  const handleInput2 = (e) => {
    setInput2(e.target.value);
  }
  
  const handleChange1 = () => {
    setChecked1(!checked1);
  };

  const handleChange2 = () => {
    setChecked2(!checked2);
  };

  const handleChange3 = () => {
    setChecked3(!checked3);
  };

 /* const SumaPrecios = (e) => {
    let webPrice = checked1 ? 500 : 0;

    let webPaginas = input1 * 30;
    
    let webIdiomas = input2 * 30;
    
    let seoPrice = checked2 ? 300 : 0;
  
    let googleAdsPrice = checked3 ? 200 : 0;
  
    const suma = webPrice + webPaginas + webIdiomas + seoPrice + googleAdsPrice;
    return (
    <div>
      <p>Precio: {suma}€</p>
      </div>
    );
  }*/

  const OpcWeb = (e) => {
    if(checked1 === true) {
      return <>
              <ServiciosWeb
                id="paginas"
                text="Número de páginas "
                value={input1}
                onChange={handleInput1}
              />
              <ServiciosWeb
                id="idiomas"
                text = "Número de idiomas "
                value={input2}
                onChange={handleInput2}
              />
            </>
    }
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
          <OpcWeb/>
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
      <SumaPrecios
        input1={input1}
        input2={input2}
        checked1={checked1}
        checked2={checked2}
        checked3={checked3}
      />
    </div>
  );
}

export default App;
