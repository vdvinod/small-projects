import React from "react";

const newSelectChoices = ({choices, bindValueProperty, bindValueToField}) => {
    console.log(choices);
    const list = choices.map((val, index)=>{
        return <li key={index} onClick={()=>bindValueToField(val)}>{val[bindValueProperty]}</li>
    });
    return (
        <ul className="ul-dropdown-menu">
            {list}
        </ul>
    )
}

export default newSelectChoices;