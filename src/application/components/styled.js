import styled from "styled-components";

export const BodyStyle = styled.div `
    font-family: Arial, Helvetica, sans-serif;
    margin: 5rem;
`
export const BodyStyleP2 = styled(BodyStyle) `
    background-color: coral;
    margin: 0;
`

export const StyleForm = styled.div `
    margin-left: 5rem;
    width: 40%;
    float:left;
`
export const StyleDivPresupuesto = styled(StyleForm) `
    border: 3px solid coral;
    border-radius: 15%;
    margin: 2rem 5rem 0rem 0rem;
    float:right;
`

export const StyleText = styled.p `
    margin: 1rem;
`

export const StylePresupuesto = styled.ul `
    margin-left: 2rem;
`
export const StyleListaPressupuesto = styled.p `
    font-weight:bold;
    font-size: 18px;
    color: white;
    background-color: coral;
    margin: 0;
    padding: 1rem 0rem 1rem 2rem;
`
export const StyleP = styled.p `
    font-weight:bold;
    font-size: 20px;
    color: coral;
    margin: 2rem;
`

export const BasicDataStyle = styled.div `
    margin: 2rem;
`
export const StyleH1 = styled.h1 `
    font-weight:bold;
    font-size: 40px;
    text-align: center;
`
export const StyleH1P2 = styled(StyleH1) `
    margin: 0;
    padding: 1rem;
`
export const StyleServiciosWeb = styled.div `
    border: 3px solid black;
    border-radius: 15px;
    width: 350px;
    text-align:center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 3rem;
    font-family: Arial, Helvetica, sans-serif;
`;

export const StyleSDiv = styled.div `
    background-color: coral;
    border-radius: 15px;
    width: fit-content;
    margin: 1rem 0rem 1rem 3rem;
    padding: 1rem;
    font-weight:bold;
`;

export const InputStyle = styled.input `
    width: 35px;
    border: none;
    text-align:center;
`;

export const ButtonsStyle = styled.button `
    background-color: coral;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 20px;
    font-weight:bold;
    width: 25px;
    cursor: pointer;
`
export const HomeStyle = styled.div `
    margin: 0 auto;
    text-align:center;
    font-size: 20px;
`

export const ButtonHome = styled.button `
    background-color: coral;
    border: none;
    border-radius: 15px;
    padding: 0px 20px 0px 20px;
    font-size: 20px;
    font-weight:bold;
    margin: 1rem
    cursor: pointer;
`
export const ButtonGuardar = styled(ButtonHome) `
    padding: 20px 20px 20px 20px;
    margin-left: 3rem;
    margin-top: 0;
    cursor: pointer;
`
export const ButtonOrdenar = styled(ButtonHome) `
    font-size: 16px;
    padding: 1rem;
    margin: 10px;
    margin-top: 0;
    margin-bottom: 0;
    cursor: pointer;
`
export const PHome = styled.p `
    text-decoration: underline overline;
    color: white;
`