import React from "react";
import { useState } from "react";
import obtenerValorInicial from "../components/ObtenerValorInicial";
import obtenerValorInicialString from "../components/ObtenerValorInicialStrings";
import guardarPresupuesto from "../components/GuardarPresuspuesto";
import Checkbox from "../components/Checkbox";
import BasicInputData from "../components/BasicInputData";
import sumaPrecios from "../components/sumaPrecios";
import OpcWeb from "../components/OpcWeb";
import MostrarPresupuestos from "../components/MostrarPresupuestos";
import {
  StyleP,
  StyleSDiv,
  BasicDataStyle,
  ButtonGuardar,
  StyleForm,
  StyleDivPresupuesto,
  StyleH1P2,
  BodyStyleP2,
} from "../components/styled";

const Page2 = () => {
  const [numPresupuestos, setNumPresupuestos] = useState(0);

  const [inputData1, setInputData1] = useState(() => {
    return obtenerValorInicialString("inputData1");
  });

  const [inputData2, setInputData2] = useState(() => {
    return obtenerValorInicialString("inputData2");
  });

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
    if (nomInput === "input1") {
      setInput1(e.target.value);
    }
    if (nomInput === "input2") {
      setInput2(e.target.value);
    }
    if (nomInput === "inputData1") {
      setInputData1(e.target.value);
    }
    if (nomInput === "inputData2") {
      setInputData2(e.target.value);
    }

    window.localStorage.setItem(nomInput, e.target.value);
  };

  const handleInputSumaResta = (e, nomInput, signo) => {
    let valor;
    if (signo === "+") {
      if (nomInput === "input1") {
        valor = Number.parseInt(input1) + 1;
        setInput1(valor);
      }
      if (nomInput === "input2") {
        valor = Number.parseInt(input2) + 1;
        setInput2(valor);
      }
    } else {
      if (nomInput === "input1") {
        valor = Number.parseInt(input1) - 1;
        setInput1(valor);
      }
      if (nomInput === "input2") {
        valor = Number.parseInt(input2) - 1;
        setInput2(valor);
      }
    }
    window.localStorage.setItem(nomInput, valor);
  };

  const handleChange = (e, checkAct) => {
    if (checkAct === "checked1") {
      setChecked1(e.target.checked);
    } else if (checkAct === "checked2") {
      setChecked2(e.target.checked);
    } else {
      setChecked3(e.target.checked);
    }
    window.localStorage.setItem(checkAct, e.target.checked);
  };

  const opcionesWeb = OpcWeb(
    checked1,
    input1,
    input2,
    handleInputSumaResta,
    handleInput
  );

  return (
    <BodyStyleP2>
      <StyleH1P2>Presupuestos Online</StyleH1P2>
      <hr/>
      <StyleForm>
        <StyleP>Qué quieres hacer?</StyleP>
        <div>
          <StyleSDiv>
            <BasicInputData
              id="nombrePresupuesto"
              text="Nombre presupuesto "
              value={inputData1}
              onChange={(e) => handleInput(e, "inputData1")}
            />
            <BasicInputData
              id="nombreCliente"
              text="Nombre cliente "
              value={inputData2}
              onChange={(e) => handleInput(e, "inputData2")}
            />
          </StyleSDiv>
          <BasicDataStyle>
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
          </BasicDataStyle>
          <StyleSDiv>Precio: {sumaPrecios(checked1, input1, input2, checked2, checked3)}€
          </StyleSDiv>
        </div>
        <ButtonGuardar onClick={() => {
          guardarPresupuesto(); 
          setNumPresupuestos(numPresupuestos + 1);
          }}>Guardar
        </ButtonGuardar>
      </StyleForm>
      <StyleDivPresupuesto>
        <StyleP>Presupuestos guardados:</StyleP>
        <MostrarPresupuestos count={numPresupuestos} />
      </StyleDivPresupuesto>
    </BodyStyleP2>
  );
};

export default Page2;
