import React, { Component } from "react";

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif){
      this.props.selectGif(this.props.id);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id;
  }

  render() {
    console.log("GIF render " + this.props.id);
    // if my props.id est null
    if (!this.props.id) {
    // pour destructurer const { id } = this.props; if (!id) { ... }
      return <p className="no-gif">Gif pas encore chargé.</p>;
    }

    const src = `https://i.giphy.com/media/${this.props.id}/giphy.gif`;
    return(
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
