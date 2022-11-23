import './App.css';
import React from 'react';
import { useState } from 'react';
import Checkbox from './components/Checkbox';
import SumaPrecios from './components/SumaPrecios';
import ServiciosWeb from './components/ServiciosWeb';
import {StyleServiciosWeb} from './components/styled';

function App() {

  const [checked1, setChecked1] = useState(() => {

    const valorGuardado = window.localStorage.getItem('checked1');
    const valorInicial = JSON.parse(valorGuardado);

    if (valorInicial === null) {
      window.localStorage.setItem('checked1', false);
    }

    return Boolean(valorInicial);
  });

  const [checked2, setChecked2] = useState(() => {

    const valorGuardado = window.localStorage.getItem('checked2');
    const valorInicial = JSON.parse(valorGuardado);

    if (valorInicial === null) {
      window.localStorage.setItem('checked2', false);
    }

    return Boolean(valorInicial);
  });

  const [checked3, setChecked3] = useState(() => {

    const valorGuardado = window.localStorage.getItem('checked3');
    const valorInicial = JSON.parse(valorGuardado);

    if (valorInicial === null) {
      window.localStorage.setItem('checked3', false);
    }

    return Boolean(valorInicial);
  });

  const [input1, setInput1] = useState(() => {
    if (Number(window.localStorage.getItem('input1')) === null) {
      Number(window.localStorage.setItem('input1', 0));
    }
    return Number(window.localStorage.getItem('input1'));
  });

  const [input2, setInput2] = useState(() => {
    if (Number(window.localStorage.getItem('input2')) === null) {
      Number(window.localStorage.setItem('input2', 0));
    }
    return Number(window.localStorage.getItem('input2'));
  });

  const handleInput1 = (e) => {
    setInput1(e.target.value);
    window.localStorage.setItem('input1', e.target.value);
  };

  const handleInputSuma1 = (e) => {
      const numActualInput1 = Number.parseInt(input1) + 1;
      window.localStorage.setItem('input1', numActualInput1);
  };
  const handleInputResta1 = (e) => {
      const numActualInput1 = Number.parseInt(input1) - 1;
      window.localStorage.setItem('input1', numActualInput1);
  };

  const handleInput2 = (e) => {
    setInput2(e.target.value);
    window.localStorage.setItem('input2', e.target.value);
  }

  const handleInputSuma2 = (e) => {
    const numActualInput2 = Number.parseInt(input2) + 1;
    window.localStorage.setItem('input2', numActualInput2);
};
const handleInputResta2 = (e) => {

    const numActualInput2 = Number.parseInt(input2) - 1;
    window.localStorage.setItem('input2', numActualInput2);
};
  
  const handleChange1 = (e) => {
    setChecked1(e.target.checked)
    window.localStorage.setItem('checked1', e.target.checked);
  };

  const handleChange2 = (e) => {
    setChecked2(e.target.checked)
    window.localStorage.setItem('checked2', e.target.checked);
  };

  const handleChange3 = (e) => {
    setChecked3(e.target.checked)
    window.localStorage.setItem('checked3', e.target.checked);
  };

  const OpcWeb = (e) => {
    if(checked1 === true) {
      return <StyleServiciosWeb>
              <ServiciosWeb
                id="paginas"
                text="Número de páginas "
                value={input1}
                onChange={handleInput1}
                onClickSuma={handleInputSuma1}
                onClickResta={handleInputResta1}
              />
              <ServiciosWeb
                id="idiomas"
                text = "Número de idiomas "
                value={input2}
                onChange={handleInput2}
                onClickSuma={handleInputSuma2}
                onClickResta={handleInputResta2}
              />
            </StyleServiciosWeb>
    }
  }

  return (
    <div className="App" on>
      <p>Qué quieres hacer?</p>
      <form>
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
      </form>
    </div>
  );
}

export default App;
