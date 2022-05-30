import React, { Component } from "react";

class SearchBar extends Component {
  handleUpdate =(event)=> {
    // console.log(event.target.value); to display the value of each key
    // we need to call the function Search who's inside app.jsx with props
    this.props.searchFunction(event.target.value);
  }

  render(){
    return(
      <input type="text" className="form-control form-search" onChange={this.handleUpdate} />
    );
  }
}

export default SearchBar;
