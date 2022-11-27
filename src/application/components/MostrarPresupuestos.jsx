import { StyleListaPressupuesto, StylePresupuesto } from "./styled";

const MostrarPresupuestos = () => {

    const presupuestos =
      window.localStorage.getItem("presupuestos") === null
        ? []
        : JSON.parse(window.localStorage.getItem("presupuestos"));
    return (
        <div>
            {presupuestos.map(presupuesto => {
                return <div>
                    <StyleListaPressupuesto>Nombre Presupuesto: {presupuesto.nombrePresupuesto}</StyleListaPressupuesto>
                    <StylePresupuesto>
                        <li>Nombre cliente: {presupuesto.nombreUsuario}</li>
                        <li>Web: {presupuesto.web}</li>
                        <li>Páginas: {presupuesto.paginas}</li>
                        <li>Idiomas: {presupuesto.idiomas}</li>
                        <li>SEO: {presupuesto.SEO}</li>
                        <li>Google Ads: {presupuesto.GoogleAds}</li>
                        <li>Fecha: {presupuesto.fecha}</li>
                        <li>Precio: {} €</li>
                    </StylePresupuesto>
                </div>
            })}
        </div>
    );
  }

 export default MostrarPresupuestos;