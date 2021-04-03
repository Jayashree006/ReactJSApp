// App.js
//
import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flower: []
    }
    this.getFlower();
  }
  getFlower() {
    fetch('/flower')
      .then(response => response.json())
      .then(data => {
        this.setState({
          flower: data
        });
      });
    }
  render() {
    return (
    <div>
      <div className="App" >
      <div className="bg">
        { this.state.flower.map(obj => {
        if (obj.name === 'Jasmine'){
        return (
        <div>
         <h2>{obj.name}</h2>
         <h3><a href = 'https://frontendappforproject.s3.ap-south-1.amazonaws.com/Common_Jasmine.jpg'>{obj.colour}</a></h3>
         </div>
        );}
        if (obj.name === 'Sunflower'){
        return (
        <div>
         <h2>{obj.name}</h2>
         <h3><a href = 'https://frontendappforproject.s3.ap-south-1.amazonaws.com/sunflower.jpg'>{obj.colour}</a></h3>
         </div>
        );}
        if (obj.name === 'Dandelion'){
        return (
        <div>
         <h2>{obj.name}</h2>
         <h3><a href = 'https://frontendappforproject.s3.ap-south-1.amazonaws.com/blue-raindrops-on-dandelion.jpg'>{obj.colour}</a></h3>
         </div>
        );
        }})
        }
      </div>
      </div>
    </div>
    );
  }
}
export default App;