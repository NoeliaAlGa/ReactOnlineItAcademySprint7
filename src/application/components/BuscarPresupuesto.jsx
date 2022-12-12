
export default function BuscarPresupuesto(nombre) {
    const listaPresupuestos = JSON.parse(window.localStorage.getItem("presupuestos"));
    
    const presupuestoBusqueda = listaPresupuestos.filter((presupuesto) => presupuesto.nombreUsuario === nombre);
    
    if(presupuestoBusqueda.length === 0) {
        alert("Este nombre no está en la lista de presupuestos.") 
    }
    else {
        window.localStorage.setItem("busquedaPresupuesto", JSON.stringify(presupuestoBusqueda));
    }
};
