import React from "react";

const newSelectMatch = ({clickHandler, showHideHandler, value, inputChangeHandler, removeSelectedValue}) => {
    if(!value){
        value = "";
    }
    console.log("match");
    return (
        <span>
            <span></span>
            <input className="input-control" value={value} onChange={inputChangeHandler} onClick={clickHandler} onFocus={()=>showHideHandler(true)} onBlur={()=>showHideHandler(false)} type="text" />
            {value && <span onClick={removeSelectedValue}>X</span>}
        </span>
    )
}

export default newSelectMatch;