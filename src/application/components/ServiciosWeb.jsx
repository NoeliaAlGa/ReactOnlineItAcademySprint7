import React from 'react'
import {InputStyle, ButtonsStyle} from './styled';
import Modals from './Modals';

const ServiciosWeb = ({id, text ,value, onChange, onClickSuma, onClickResta}) => {
    
    return (
        <div>
            <p>{text}
                <ButtonsStyle onClick={onClickSuma}>+</ButtonsStyle> 
                <InputStyle id={id} key={id} value={value} type="number" onChange={onChange} />
                <ButtonsStyle onClick={onClickResta}>-</ButtonsStyle>
                <Modals id={id} value={value}/>
            </p>  
        </div>
    );
}

export default ServiciosWeb