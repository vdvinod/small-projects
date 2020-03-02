import React from "react";

import NewSelectChoices from "./new-select-choices";
import NewSelectMatch from "./new-select-match";

class NewSelect extends React.Component {
    state = {
        isOpen: false,
        value:{}
    }
    showHideList = (isShow) => {
        setTimeout(()=>{
            this.setState({
                isOpen: isShow
            });
        },100);
    }
    bindValueToField = (val) => {
        console.log(val,"adas");
        this.setState({
            value: val
        });
    }
    removeSelectedValue = () => {
        this.setState({
            value: {}
        });
    }
    render() {
        return (
            <div className="new-select">
                <NewSelectMatch clickHandler={this.props.clickHandler} showHideHandler={this.showHideList} value={this.state.value[this.props.bindValueProperty]} removeSelectedValue={this.removeSelectedValue}/>
                { this.state.isOpen && this.props.choices && <NewSelectChoices choices={this.props.choices} bindValueProperty={this.props.bindValueProperty} bindValueToField={this.bindValueToField}/>}
            </div>
        );
    }
}

export default NewSelect;