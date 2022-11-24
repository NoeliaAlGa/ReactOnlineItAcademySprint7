import "./App.css";
import React from "react";
import { useState } from "react";
import Checkbox from "./components/Checkbox";
import SumaPrecios from "./components/SumaPrecios";
import ServiciosWeb from "./components/ServiciosWeb";
import { StyleServiciosWeb } from "./components/styled";

function App() {
  const [checked1, setChecked1] = useState(() => {
    const valorGuardado = window.localStorage.getItem("checked1");
    const valorInicial = JSON.parse(valorGuardado);

    if (valorInicial === null) {
      window.localStorage.setItem("checked1", false);
    }

    return Boolean(valorInicial);
  });

  const [checked2, setChecked2] = useState(() => {
    const valorGuardado = window.localStorage.getItem("checked2");
    const valorInicial = JSON.parse(valorGuardado);

    if (valorInicial === null) {
      window.localStorage.setItem("checked2", false);
    }

    return Boolean(valorInicial);
  });

  const [checked3, setChecked3] = useState(() => {
    const valorGuardado = window.localStorage.getItem("checked3");
    const valorInicial = JSON.parse(valorGuardado);

    if (valorInicial === null) {
      window.localStorage.setItem("checked3", false);
    }

    return Boolean(valorInicial);
  });

  const [input1, setInput1] = useState(() => {
    if (Number(window.localStorage.getItem("input1")) === null) {
      Number(window.localStorage.setItem("input1", 0));
    }
    return Number(window.localStorage.getItem("input1"));
  });

  const [input2, setInput2] = useState(() => {
    if (Number(window.localStorage.getItem("input2")) === null) {
      Number(window.localStorage.setItem("input2", 0));
    }
    return Number(window.localStorage.getItem("input2"));
  });

  const handleInput = (e, nomInput) => {
    debugger;
    if(nomInput === "input1") {
      setInput1(e.target.value);
    }
    if(nomInput === "input2") {
      setInput2(e.target.value);
    }
    window.localStorage.setItem(nomInput, e.target.value);
  };

  const handleInputSuma = (e, nomInput) => {
    let suma;
    if(nomInput === "input1") {
      suma = Number.parseInt(input1) + 1;
      setInput1(suma);
    }
    if(nomInput === "input2") {
      suma = Number.parseInt(input2) + 1;
      setInput2(suma);
    }
    window.localStorage.setItem(nomInput, suma);
  };

  const handleInputResta = (e, nomInput) => {
    let resta;
    if(nomInput === "input1") {
      resta = Number.parseInt(input1) - 1;
      setInput1(resta);
    }
    if(nomInput === "input2") {
      resta = Number.parseInt(input2) - 1;
      setInput2(resta);
    }
    window.localStorage.setItem(nomInput, resta);
  };


  const handleChange = (e, checkAct) => {
    if (checkAct === "checked1") {
      setChecked1(e.target.checked);
    } 
    if (checkAct === "checked2") {
      setChecked2(e.target.checked);
    } 
    if (checkAct === "d") {
      setChecked3(e.target.checked);
    }
    window.localStorage.setItem(checkAct, e.target.checked);
  };

  const OpcWeb = (e) => {
    if (checked1 === true) {
      return (
        <StyleServiciosWeb>
          <ServiciosWeb
            id="paginas"
            text="Número de páginas "
            value={input1}
            onChange={(e) => handleInput(e, "input1")}
            onClickSuma={(e) => handleInputSuma (e, "input1")}
            onClickResta={(e) => handleInputResta (e, "input1")}
          />
          <ServiciosWeb
            id="idiomas"
            text="Número de idiomas "
            value={input2}
            onChange={(e) => handleInput(e, "input2")}
            onClickSuma={(e) => handleInputSuma (e, "input2")}
            onClickResta={(e) => handleInputResta (e, "input2")}
          />
        </StyleServiciosWeb>
      );
    }
  };

  return (
    <div className="App" on>
      <p>Qué quieres hacer?</p>
        <div>
          <div>
            <Checkbox
              id="1"
              value="Una pàgina web (500€)"
              checked={checked1}
              onChange={(e) => handleChange(e, "checked1")}
            />
            <OpcWeb />
          </div>
          <div>
            <Checkbox
              id="2"
              value="Una consultoria SEO (300€)"
              checked={checked2}
              onChange={(e) => handleChange(e, "checked2")}
            />
          </div>
          <div>
            <Checkbox
              id="3"
              value="Una campaña de Google Ads (200€)"
              checked={checked3}
              onChange={(e) => handleChange(e, "checked3")}
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
