function obtenerValorInicial(key) {
    const valorGuardado = window.localStorage.getItem(key);
    console.log("Valor Guardado: ", valorGuardado);
    const valorInicial = JSON.parse(valorGuardado);
    
    let valor;
  
    if(String(key).startsWith("checked")) {
      valor = valorInicial === null ? false : Boolean(valorInicial) 
    }
    else {
      valor = valorInicial === null ? 0 : Number(valorInicial)
      
    }
    window.localStorage.setItem(key, valor);
    return valor;
  }

  export default obtenerValorInicial;