import React from 'react'

const ServiciosWeb = ({id, text ,value, onChange, onClickSuma, onClickResta}) => {
    
    return (
        <div>
            <p>{text}
            <button onClick={onClickSuma}>+</button> 
            <input id={id} key={id} value={value} type="number" onChange={onChange}/>
            <button onClick={onClickResta}>-</button>
            </p>
        </div>
    );
}

export default ServiciosWeb