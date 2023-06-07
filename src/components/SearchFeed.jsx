import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchDataFromApi } from "../assets/services/fetchDataFromApi";
import { useParams } from "react-router-dom";
import Videos from "./Videos";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchedValue } = useParams();
  console.log(searchedValue);

  useEffect(() => {
    fetchDataFromApi(`search?part=snippet&q=${searchedValue}`)
      .then((data) => {
        console.log(data.items);
        setVideos(data.items);
      })
      .catch((err) => console.log("Error IS " + err));
  }, [searchedValue]);
  return (
    <Box
      p={2}
      sx={{
        overflowY: "auto",
        height: "90vh",
        flex: 2,
      }}
    >
      <Typography variant="h4" fontWeight="bold" color="white" mb={2}>
        {searchedValue}
        <span style={{ color: "#F31503" }}> Results</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
