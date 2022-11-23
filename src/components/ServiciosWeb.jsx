import React from 'react'
import {InputStyle, ButtonsStyle} from './styled';

const ServiciosWeb = ({id, text ,value, onChange, onClickSuma, onClickResta}) => {
    
    return (
        <div>
            <p>{text}
            <ButtonsStyle onClick={onClickSuma}>+</ButtonsStyle> 
            <InputStyle id={id} key={id} value={value} type="number" onChange={onChange} />
            <ButtonsStyle onClick={onClickResta}>-</ButtonsStyle>
            </p>
        </div>
    );
}

export default ServiciosWeb