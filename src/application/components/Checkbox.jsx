import React from "react";
import {StyleText} from './styled'

const Checkbox = ({id, value, checked, onChange}) => {
    return (
        <StyleText>
            <input id={id} key={id} type="checkbox" checked={checked} onChange={onChange} />
            {value}
        </StyleText>
    );
};

export default Checkbox;