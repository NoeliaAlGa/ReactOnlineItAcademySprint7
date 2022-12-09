function ordenar(tipo) {
    let listaPresupuestosActual = JSON.parse(window.localStorage.getItem("presupuestos"));
    let listaPresOrdenada;
    
    if(tipo === "alfabetico") {
        listaPresOrdenada = listaPresupuestosActual.sort(function(presActual, nextPres) {
            if(presActual.nombreUsuario > nextPres.nombreUsuario) {
                return 1;
            }
            if(presActual.nombreUsuario < nextPres.nombreUsuario) {
                return -1;
            }
            return 0;
        });
    }
    else {
        listaPresOrdenada = listaPresupuestosActual.sort(function(presActual, nextPres) {
            if(presActual.fecha > nextPres.fecha) {
                return 1;
            }
            if(presActual.fecha < nextPres.fecha) {
                return -1;
            }
            return 0;
        });
        window.localStorage.setItem("busquedaPresupuesto", null);
    }
    window.localStorage.setItem("presupuestos", JSON.stringify(listaPresOrdenada));
   
}
export default ordenar;