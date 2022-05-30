import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputChanged: false
    }
  }

  handleUpdate =(event)=> {
    // console.log(event.target.value); to display the value of each key
    // we need to call the function Search who's inside app.jsx with props
    this.props.searchFunction(event.target.value);
  }

  inputChanged = () => {
    this.setState({
      inputChanged: !this.state.inputChanged
    });
  }

  classesInput = () => {
    let styleForm = "form-control form-search";
    if (this.state.inputChanged) {
      styleForm += " yellow";
    }
    return styleForm;
  }


  render(){
    return(
      <input type="text" className={this.classesInput()} onChange={this.handleUpdate} onFocus={this.inputChanged } />
    );
  }
}

export default SearchBar;
