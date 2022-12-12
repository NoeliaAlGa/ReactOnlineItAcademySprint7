import { StyleListaPressupuesto, StylePresupuesto } from "./styled";
import sumaPrecios from "./SumaPrecios";
const MostrarPresupuestos = () => {
 
    const presupuestos =
      window.localStorage.getItem("presupuestos") === null
        ? []
        : JSON.parse(window.localStorage.getItem("presupuestos"));
    const presupuestoBusqueda = JSON.parse(window.localStorage.getItem("busquedaPresupuesto"));

    const listaMostrar = (presupuestoBusqueda === null) 
    ? presupuestos : presupuestoBusqueda;
    return (
        <div>
            {listaMostrar.map(presupuesto => {
                let presWeb = (presupuesto.web === "true") ? true : false;
                let presupuestoWeb = (presupuesto.web === "true") ?<li><b>Web:</b></li> : "";

                let presPaginas = Number(presupuesto.paginas);
                let presupuestoPaginas = (presupuesto.paginas !== "0") ? <li><b>Páginas:</b> {presupuesto.paginas}</li> : "";

                let presIdiomas = Number(presupuesto.idiomas);
                let presupuestoIdiomas = (presupuesto.idiomas !== "0") ? <li><b>Idiomas:</b> {presupuesto.idiomas}</li> : "";

                let presSEO = (presupuesto.SEO === "true") ? true : false;
                let presupuestoSEO = (presupuesto.SEO === "true") ? <li><b>SEO</b></li> : "";

                let presGoogleAds = (presupuesto.GoogleAds=== "true") ? true : false;
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
                        <li><b>Precio:</b> {sumaPrecios(presWeb, presPaginas, presIdiomas,presSEO, presGoogleAds)}€</li>
                    </StylePresupuesto>
                </div>
            })}
        </div>
    );
  }

 export default MostrarPresupuestos;