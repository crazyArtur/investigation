import React from "react";
import "./App.css";
import { ImageSlider } from "./components/ImageSlider";

class App extends React.Component {
  state = {
    isVisible: true
  };

  render() {
    return (
      <div className="App">
        <ImageSlider />
      </div>
    );
  }
}

export default App;
