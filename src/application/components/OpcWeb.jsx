import ServiciosWeb from "./ServiciosWeb";
import { StyleServiciosWeb } from "./styled";

const OpcWeb = (checked1, input1, input2, handleInputSumaResta, handleInput) => {
    if (checked1 === true) {
      return (
        <StyleServiciosWeb>
          <ServiciosWeb
            id="paginas"
            text="Número de páginas "
            value={input1}
            onChange={(e) => handleInput(e, "input1")}
            onClickSuma={(e) => handleInputSumaResta (e, "input1", "+")}
            onClickResta={(e) => handleInputSumaResta (e, "input1", "-")}
          />
          <ServiciosWeb
            id="idiomas"
            text="Número de idiomas "
            value={input2}
            onChange={(e) => handleInput(e, "input2")}
            onClickSuma={(e) => handleInputSumaResta (e, "input2", "+")}
            onClickResta={(e) => handleInputSumaResta (e, "input2", "-")}
          />
        </StyleServiciosWeb>
      );
    }
  };
  export default OpcWeb;