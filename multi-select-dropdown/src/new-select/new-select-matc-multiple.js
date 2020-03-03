import React from "react";

const newSelectMatchMultiple = ({clickHandler, showHideHandler, value, inputChangeHandler, removeSelectedValue, bindValueProperty}) => {
    if(!value){
        value = "";
    }
    console.log("match");
    return (
        <div>
            <div className="multi-select">
            {value.length ? value.map((val, key)=>{
               return (<span key={key}>{val[bindValueProperty]}<span>x</span></span>
                       )
            }) : null}
            </div>
            <input className="input-control" onChange={inputChangeHandler} onClick={clickHandler} onFocus={()=>showHideHandler(true)} onBlur={()=>showHideHandler(false)} type="text" />
        </div>
    )
}

export default newSelectMatchMultiple;