import React from "react";

const newSelectMatch = ({clickHandler, showHideHandler}) => {
    return (
        <span>
            <span></span>
            <input className="input-control" onClick={clickHandler} onFocus={()=>showHideHandler(true)} onBlur={()=>showHideHandler(false)} type="text" />
        </span>
    )
}

export default newSelectMatch;