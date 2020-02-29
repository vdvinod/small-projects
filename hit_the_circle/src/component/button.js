import React from "react";

const button = ({children, clickHandler}) => {
    const classes = ["btn", "btn-primary", "margin-2px"];
    return (
        <button className={[...classes].join(" ")} onClick={clickHandler}>{children}</button>
    )
}

export default button;