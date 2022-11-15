import React from "react";

const Checkbox = ({id, value, checked, onChange}) => {
    return (
        <label>
            <input id={id} key={id} type="checkbox" checked={checked} onChange={onChange} />
            {value}
        </label>
    );
};

export default Checkbox;