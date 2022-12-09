
export default function BuscarPresupuesto(nombre) {
    const listaPresupuestos = JSON.parse(window.localStorage.getItem("presupuestos"));
    
    const presupuestoBusqueda = listaPresupuestos.filter((presupuesto) => presupuesto.nombreUsuario === nombre);
    
    let presupuestoEncontrado = (presupuestoBusqueda.length === 0) 
    ? alert("Este nombre no está en la lista de presupuestos.") 
    : window.localStorage.setItem("busquedaPresupuesto", JSON.stringify(presupuestoBusqueda));
}
