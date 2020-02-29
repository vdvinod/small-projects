import React from "react";
import ReactDOM from "react-dom";

import Circle from "../component/circle";
import Button from "../component/button";
import Modal from "../component/modal";


import "../App.css";

class Layout extends React.Component {
    state = {
        score: 0,
        selectedCircle: null,
        playStarted: false
    };
    activeCircle = null;
    noOfCircle = new Array(36).fill(Math.floor(Math.random() * 36) + 1);
    references = {};

    playHandler = () => {
        this.activeCircle = Math.floor(Math.random() * 36) + 1;
        this.setState({
            playStarted: true,
            selectedCircle:this.activeCircle
        });

    }

    stopHandler = () => {
        this.showModel = true;
        this.setState({
            score: 0,
            playStarted: false
        });
    }

    circleClickHandler = (id) => {
        if(!this.state.playStarted){
            return true;
        }
        if(this.activeCircle === id){
            var newScore = this.state.score + 1;
        }else{
            var newScore = this.state.score - 1;  
        }
        this.setState({
            score: newScore
        });
        this.playHandler();
    }

    render () {
        return (

            <div className="col-md-4 col-md-offset-4">
            {this.showModel ?
                    (<div className="col-md-12">
                        <Modal score={this.state.score}/>
                    </div>) : null }
                
                <div>
                    Score : {this.state.score}
                </div>
                <div className="circle-container">
                    {
                        this.noOfCircle.map((value, key)=>{
                            return (<Circle key={key} id={key} selectedCircle={this.state.selectedCircle} clickHandler={this.circleClickHandler}/>);
                        })
                    }
                </div>
                <div className="col-md-6 col-md-offset-4">
                    <Button clickHandler={this.playHandler}>Play</Button>
                    <Button clickHandler={this.stopHandler}>Stop</Button>
                </div>
            </div>
        )
    }
}

export default Layout;