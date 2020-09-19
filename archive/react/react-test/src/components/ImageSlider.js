import React from "react";

export class ImageSlider extends React.Component {
  state = {
    images: [
      "https://i.pinimg.com/originals/bc/4b/81/bc4b818c743b29861be3171aed0d0077.jpg",
      "https://i.pinimg.com/564x/68/22/cb/6822cbc6d9b58828b2bf04dc8627fd51.jpg",
      "https://i.pinimg.com/564x/79/a2/3b/79a23baf4da05e3b8c5d179cd8b3cd15.jpg"
    ],
    index: 0
  };

  handlePrev = () => {
    if (this.state.index == 0)
      this.setState({
        index: this.state.images.length - 1
      });
    else
      this.setState({
        index: this.state.index - 1
      });
  };

  handleNext = () => {
    if (this.state.index == this.state.images.length - 1)
      this.setState({
        index: 0
      });
    else
      this.setState({
        index: this.state.index + 1
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handlePrev}>prev</button>
        <img
          style={{
            width: 400,
            height: 700
          }}
          src={this.state.images[this.state.index]}
        />
        <button onClick={this.handleNext}>next</button>
      </div>
    );
  }
}
