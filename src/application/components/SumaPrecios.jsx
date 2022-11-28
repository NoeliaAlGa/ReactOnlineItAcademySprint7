
function sumaPrecios(checked1, input1, input2, checked2, checked3) {
  let webPrice = checked1 ? 500 : 0;

    let webPaginas = input1 * 30;
    
    let webIdiomas = input2 * 30;
    
    let seoPrice = checked2 ? 300 : 0;
  
    let googleAdsPrice = checked3 ? 200 : 0;

  
    const suma = webPrice + webPaginas + webIdiomas + seoPrice + googleAdsPrice;;

    return suma;
  }

  export default sumaPrecios;