import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 25d2d2129bc772217e3feddd8245de4e6fbc1f6d1e00c14a7e5ba841c1156190"
  }
});
