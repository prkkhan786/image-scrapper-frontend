import React, { Component } from 'react';
import {Link,Switch,Route} from 'react-router-dom';
import './App.css';
import Resent from './resentsearch';

class App extends Component {
  constructor(){
    super();
    this.state = {
      text:'',
      isloaded:false
    }

    this.onchangeevent = this.onchangeevent.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }
  onchangeevent(e){
    console.log(e.target.value);
    this.setState({
      text:e.target.value
    })
  }

  handlesubmit(e){
    e.preventDefault();
    console.log(this.state.text);
    //console.log("form submited");
    fetch('http://localhost:3001/imagesearch',{
      method:'POST',
      headers:{
        Accept: 'application/json',
       'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        tag:this.state.text
      })
    }).then(res=>res).then(ans=>{
     
      console.log(ans); 
    })
  }
  render() {

    return (
      <div className="App">
        <Switch>
        <Route path="/recent" component={Resent} />
        
        <div>
        <h1> Image scrapper </h1>
        <form>
        <label htmlFor="exampleInputEmail1">Search image</label>
        <input type="text" 
        className="form-control w-50 m-auto 0 "
        placeholder="Search "
        value={this.state.text}
        onChange={this.onchangeevent} />
        <button className="btn btn-primary m-2" 
        onClick={this.handlesubmit}>SUBMIT</button>
        </form>
        <Link to='/recent'> <button className="btn btn-primary m-2"> Recent searches</button> </Link>
        </div>
        </Switch>
       
      </div>
    );
  }
}

export default App;
