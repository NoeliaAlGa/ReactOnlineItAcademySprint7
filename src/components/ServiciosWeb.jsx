import React from 'react'

const ServiciosWeb = ({id, text ,value, onChange}) => {
    return (
        <div>
            <p>{text} 
            <input id={id} key={id} value={value} type="number" onChange={onChange}/>
            </p>
        </div>
    );
    
  /*return (
    <div>
        <p>Número de páginas <input type="number" value={input1} onChange={event => setInput1(event.target.value)}/></p>
        <p>Número de idiomas <input type="number" value={input2} onChange={event => setInput2(event.target.value)}/></p>
        )
    </div>*/
  
}

export default ServiciosWeb