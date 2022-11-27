import React from "react";
import {StyleText} from './styled'

const BasicInputData = ({id, text ,value, onChange}) => {
    return (
        <StyleText>
            <label> {text}</label>
            <input id={id} key={id} value={value} type="text" onChange={onChange} />
        </StyleText>
    );
};

export default BasicInputData;