import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 0ae8edbd67abb83a49e8b53888c83181e4a7d92a2c9055abf48a7889ff0a52b2"
  }
});
