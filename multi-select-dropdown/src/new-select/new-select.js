import React from "react";

import NewSelectChoices from "./new-select-choices";
import NewSelectMatch from "./new-select-match";
import NewSelectMatchMultiple from "./new-select-matc-multiple";

class NewSelect extends React.Component {
    state = {
        isOpen: false
    }
    showHideList = (isShow) => {
        setTimeout(()=>{
            this.setState({
                isOpen: isShow
            });
        },100);
    }

    selectHandler = (val) => {
        if(!this.props.multiple){
            this.props.on_select(val);
            return;
        }
        this.props.value.push(val);
    }

    inputChangeHandler = () => {

    }

    render() {
        console.log(this.props.multiple)
        return (
            <div className="new-select">
                {this.props.multiple 
                    ? <NewSelectMatchMultiple 
                    clickHandler={this.props.clickHandler} 
                    showHideHandler={this.showHideList} 
                    value={this.props.value} 
                    bindValueProperty={this.props.bindValueProperty}
                    removeSelectedValue={this.props.on_remove}
                    inputChangeHandler={this.inputChangeHandler}/>
                    :<NewSelectMatch 
                    clickHandler={this.props.clickHandler} 
                    showHideHandler={this.showHideList} 
                    value={this.props.value[this.props.bindValueProperty]} 
                    removeSelectedValue={this.props.on_remove}
                    inputChangeHandler={this.inputChangeHandler}/>}

                { this.state.isOpen && this.props.choices && <NewSelectChoices 
                    choices={this.props.choices} 
                    bindValueProperty={this.props.bindValueProperty} 
                    bindValueToField={this.selectHandler}/>}
            </div>
        );
    }
}

export default NewSelect;