import React from "react";

const modal = (props) => {
    return (<div className="custom-modal ">
    <span onClick={props.clickHandler}>X</span>
        your total score is {props.score}
    </div>)
}

export default modal;