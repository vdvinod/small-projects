import React from "react";

const newSelectChoices = ({choices, bindValue}) => {
    console.log(choices);
    const list = choices.map((val, index)=>{
        return <li key={index}>{val[bindValue]}</li>
    });
    return (
        <ul className="ul-dropdown-menu">
            {list}
        </ul>
    )
}

export default newSelectChoices;