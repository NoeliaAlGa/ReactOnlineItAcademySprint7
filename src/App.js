import "./App.css";
import React from "react";
import { useState } from "react";
import obtenerValorInicial from "./components/ObtenerValorInicial";
import Checkbox from "./components/Checkbox";
import SumaPrecios from "./components/SumaPrecios";
//import ServiciosWeb from "./components/ServiciosWeb";
//import { StyleServiciosWeb } from "./components/styled";
import OpcWeb from "./components/OpcWeb";

function App() {
  const [checked1, setChecked1] = useState(() => {
    return obtenerValorInicial("checked1");
  });
  
  const [checked2, setChecked2] = useState(() => {
    return obtenerValorInicial("checked2");
  });

  const [checked3, setChecked3] = useState(() => {
    return obtenerValorInicial("checked3");
  });

  const [input1, setInput1] = useState(() => {
    return obtenerValorInicial("input1");
  });

  const [input2, setInput2] = useState(() => {
    return obtenerValorInicial("input2");
  });

  const handleInput = (e, nomInput) => {
    if(nomInput === "input1") {
      setInput1(e.target.value);
    }
    if(nomInput === "input2") {
      setInput2(e.target.value);
    }
    window.localStorage.setItem(nomInput, e.target.value);
  };

  const handleInputSumaResta = (e, nomInput, signo) => {
    let valor;
    if(signo === "+") {
      if(nomInput === "input1") {
        valor = Number.parseInt(input1) + 1;
        setInput1(valor);
      }
      if(nomInput === "input2") {
        valor = Number.parseInt(input2) + 1;
        setInput2(valor);
      }
    }
    else {
      if(nomInput === "input1") {
        valor = Number.parseInt(input1) - 1;
        setInput1(valor);
      }
      if(nomInput === "input2") {
        valor = Number.parseInt(input2) - 1;
        setInput2(valor);
      }
    }
    window.localStorage.setItem(nomInput, valor);
  };

  const handleChange = (e, checkAct) => {
    if (checkAct === "checked1") {
      setChecked1(e.target.checked);
    } 
    else if (checkAct === "checked2") {
      setChecked2(e.target.checked);
    } 
    else {
        setChecked3(e.target.checked);
    }
    window.localStorage.setItem(checkAct, e.target.checked);
  };

  const opcionesWeb = OpcWeb(checked1, input1, input2, handleInputSumaResta, handleInput);

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
            <div>{opcionesWeb}</div>
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
