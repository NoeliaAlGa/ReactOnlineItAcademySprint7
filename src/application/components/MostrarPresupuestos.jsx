import { StyleListaPressupuesto, StylePresupuesto } from "./styled";
import sumaPrecios from "./SumaPrecios";
const MostrarPresupuestos = () => {
 
    const presupuestos =
      window.localStorage.getItem("presupuestos") === null
        ? []
        : JSON.parse(window.localStorage.getItem("presupuestos"));
    return (
        <div>
            {presupuestos.map(presupuesto => {
                let presupuestoWeb = (presupuesto.web === "true") ?<li><b>Web:</b></li> : "";
                let presupuestoPaginas = (presupuesto.paginas !== "0") ? <li><b>Páginas:</b> {presupuesto.paginas}</li> : "";
                let presupuestoIdiomas = (presupuesto.idiomas !== "0") ? <li><b>Idiomas:</b> {presupuesto.idiomas}</li> : "";
                let presupuestoSEO = (presupuesto.SEO === "true") ? <li><b>SEO</b></li> : "";
                let presupuestoGoogleAds = (presupuesto.GoogleAds === "true") ? <li><b>Google Ads</b></li> : "";
    
                return <div>
                    <StyleListaPressupuesto>Nombre Presupuesto: {presupuesto.nombrePresupuesto}</StyleListaPressupuesto>
                    <StylePresupuesto>
                        <li><b>Nombre cliente:</b> {presupuesto.nombreUsuario}</li>
                        <>{presupuestoWeb}</>
                        <ul>{presupuestoPaginas}</ul>
                        <ul>{presupuestoIdiomas}</ul>
                        <>{presupuestoSEO}</>
                        <>{presupuestoGoogleAds}</>
                        <li><b>Fecha:</b> {presupuesto.fecha}</li>
                        <li><b>Precio:</b> {sumaPrecios(presupuesto.web, presupuesto.paginas, presupuesto.idiomas,presupuesto.SEO, presupuesto.GoogleAds)}€</li>
                    </StylePresupuesto>
                </div>
            })}
        </div>
    );
  }

 export default MostrarPresupuestos;