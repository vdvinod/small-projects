import React from 'react';

import NewSelect from "./new-select/new-select";

import logo from './logo.svg';
import './App.css';

class App extends React.PureComponent {
  state = {
    userList: [],
    postList: []
  }
  componentDidMount() {
    
  }

  loadUserList = ()=> {
    if(this.state.userList.length){
      return;
    }
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            userList: result
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }
  loadPostList = ()=> {
    if(this.state.postList.length){
      return;
    }
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            postList: result
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }
  render ()
  {
    return (
    <div className="App">
      <div>
       <span>User :</span>
        <span>
          <NewSelect  choices={this.state.userList} clickHandler={this.loadUserList} bindValueProperty="name"/>
        </span>
      </div>
      <div>
       <span>Post :</span>
        <span>
          <NewSelect  choices={this.state.postList} clickHandler={this.loadPostList} bindValueProperty="title"/>
        </span>
      </div>
    </div>
  );
}
}
export default App;
