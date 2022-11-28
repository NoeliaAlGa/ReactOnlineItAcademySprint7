
function guardarPresupuesto() {
    const presupuestos =
      window.localStorage.getItem("presupuestos") === null
        ? []
        : JSON.parse(window.localStorage.getItem("presupuestos"));

    const presupuesto = {
      nombrePresupuesto: window.localStorage.getItem("inputData1"),
      nombreUsuario: window.localStorage.getItem("inputData2"),
      web: window.localStorage.getItem("checked1"),
      paginas: window.localStorage.getItem("input1"),
      idiomas: window.localStorage.getItem("input2"),
      SEO: window.localStorage.getItem("checked2"),
      GoogleAds: window.localStorage.getItem("checked3"),
      fecha: new Date(),
    };

    presupuestos.push(presupuesto);
    console.log(presupuestos);
    window.localStorage.setItem("presupuestos", JSON.stringify(presupuestos));
    
  }

  export default guardarPresupuesto;