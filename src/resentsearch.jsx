import React, { Component } from "react";
class Resent extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch("http://localhost:3001/recent")
      .then(res => res.json())
      .then(res => {
        console.log(res.data);
        
        this.setState({
            data:res.data
        })
      });
    console.log("recent is mounted");
  }
  render() {
    return (
      <div className="App">
        <h1>Here are top recent searches</h1>
        <div className="App">
          <ul className="list-group">
          {
              this.state.data.map((list)=>(
                <li className="list-group-item">{list.keyword}</li>
              ))
          }
            
          </ul>
        </div>
      </div>
    );
  }
}

export default Resent;
