import React from 'react';

import NewSelect from "./new-select/new-select";

import logo from './logo.svg';
import './App.css';

class App extends React.PureComponent {
  state = {
    userList: [],
    postList: [],
    user: [],
    post: {}
  }
  componentDidMount() {
    
  }

  selectHandler= (val, type) => {
    
    this.setState({
        [type]: val
    });
  }

  removeHandler = () => {
    this.setState({
        post: {}
    });
  }

  removeChoiceHandler = (index) => {
    console.log("sd",this.props.value) 
        let i= this.state.user.findIndex((val)=>{
            
            return val.id === index;
        });
       const users = [...this.state.user];
       users.splice(i,1);
       this.setState({
         user: users
       })
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
          <NewSelect  choices={this.state.userList} multiple value={this.state.user} removeChoice={this.removeChoiceHandler} on_select={(val)=>this.selectHandler(val,'user')} clickHandler={this.loadUserList} bindValueProperty="name"/>
        </span>
      </div>
      <div>
       <span>Post :</span>
        <span>
          <NewSelect  choices={this.state.postList}  value={this.state.post} on_remove={this.removeHandler} on_select={(val)=>this.selectHandler(val,'post')} clickHandler={this.loadPostList} bindValueProperty="title"/>
        </span>
      </div>
      <div>
        <h3>Post</h3>
        Title : {this.state.post.title}
      </div>
      <div>
        <h3>users</h3>
        <div>
        {this.state.user.map((val)=>{
          return <div>name: {val.name}</div>
        })}
        </div>
      </div>
    </div>
  );
}
}
export default App;
