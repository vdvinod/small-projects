import React from "react";

const newSelectChoices = ({choices, bindValueProperty, bindValueToField}) => {
    const list = choices.map((val, index)=>{
        return <li key={index} value={val} onClick={()=>bindValueToField(val)}>{val[bindValueProperty]}</li>
    });
    return (
        <ul className="ul-dropdown-menu">
            {list}
        </ul>
    )
}

export default newSelectChoices;