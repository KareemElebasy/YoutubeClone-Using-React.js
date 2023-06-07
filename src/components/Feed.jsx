import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "./SlideBar";
import Videos from "./Videos";
import { fetchDataFromApi } from "../assets/services/fetchDataFromApi";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchDataFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        console.log(data.items);
        setVideos(data.items);
      })
      .catch((err) => console.log("Error IS " + err));
  }, [selectedCategory]);
  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          height: {
            sx: "auto",
            md: "90vh",
          },
          borderRight: "1px solid #3d3d3d",
          px: {
            sx: 0,
            md: 2,
          },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{
            mt: 1.4,
            color: "red",
          }}
        >
          Cloned By Kareem Elebasy
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "90vh",
          flex: 2,
        }}
      >
        <Typography variant="h4" fontWeight="bold" color="white" mb={2}>
          {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
