import React, { useState } from 'react';
import './Button1.css';


class ToggleKnob extends React.Component {
    render() {
      return (
        <span
          className={`toggleKnob 
                      ${this.props.isOn ? 
                      "isActive" : ""}` }
        >
        </span>
      );
    }
  }
  
  class ToggleButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isOn: false
      }
    }
    
    handleClick() {
      this.setState(prevState => ({
        isOn: !prevState.isOn
      }));
      console.log(this.state.isOn);
    }
    
    render() {
      return (
        <button className={`toggleContainer ${this.state.isOn ? "isActive" : ""}`} 
                onClick={() => this.handleClick() }
        >
          <ToggleKnob isOn={this.state.isOn}/>
        </button>
      )
    }
  }

  export default ToggleButton
  
  // ReactDOM.render(
  //   <ToggleButton />,
  //   document.getElementById("root")
  // );