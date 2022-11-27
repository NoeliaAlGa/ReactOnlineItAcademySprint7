function obtenerValorInicialString(key) {
    const valorGuardado = window.localStorage.getItem(key);
    console.log("Valor Guardado: ", valorGuardado);
    
    let valor = valorGuardado === null ? "" : String(valorGuardado)
    window.localStorage.setItem(key, valor);
    return valor;
  }

  export default obtenerValorInicialString;