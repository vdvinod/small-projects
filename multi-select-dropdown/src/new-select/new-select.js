import React from "react";

import NewSelectChoices from "./new-select-choices";
import NewSelectMatch from "./new-select-match";

class NewSelect extends React.Component {
    state = {
        isOpen: false
    }
    showHideList = (isShow) => {
        this.setState({
            isOpen: isShow
        })
    }
    render() {
        console.log(this.props.choices);
        return (
            <div className="new-select">
                <NewSelectMatch clickHandler={this.props.clickHandler} showHideHandler={this.showHideList}/>
                { this.state.isOpen && this.props.choices && <NewSelectChoices choices={this.props.choices} bindValue={this.props.bindValue}/>}
            </div>
        );
    }
}

export default NewSelect;