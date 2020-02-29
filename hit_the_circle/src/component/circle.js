import React from "react";

const circle = React.forwardRef((props, ref) => {
    const classes = props.id === props.selectedCircle ? ["circle", "circle-inactive", "glow"] :["circle", "circle-inactive"];
    return (
        <div className={[...classes].join(" ")} onClick={()=>props.clickHandler(props.id)} ref={ref}>

        </div>
    )
})

export default circle;