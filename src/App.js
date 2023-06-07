import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import VideoDetails from "./components/VideoDetails";
import ChannelDetails from "./components/ChannelDetails";
import SearchFeed from "./components/SearchFeed";
import NavBar from "./components/NavBar";
import Feed from "./components/Feed";
function App() {
  return (
    <Router>
      <Box sx={{ backgroundColor: "black" }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:searchedValue" element={<SearchFeed />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
