import "./App.css";
import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";


class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "15px" }}>
        <div className="welcome welcome-head">
          <h1>Search image on Unsplash.com</h1>
          <p className="welcome welcome-text">
            Simply type the image you are looking for in the search bar and
            press enter.
          </p>
        </div>

        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* Found: {this.state.images.length} images */}
        <ImageList images={this.state.images} />

        <div className="welcome welcome-footer">
          <p>This application created using React.js</p>
          <p>Noi Sinnang</p>
        </div>
      </div>
    );
  }
}

export default App;
