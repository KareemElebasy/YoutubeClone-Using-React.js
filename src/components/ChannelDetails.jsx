import React, { useEffect, useState } from "react";
import { fetchDataFromApi } from "../assets/services/fetchDataFromApi";
import { Link, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { demoProfilePicture } from "../assets/services/constant";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Videos from "./Videos";

const ChannelDetails = () => {
  const [channelDetails, setChannelDetails] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);
  console.log(channelDetails);
  console.log(channelVideos);
  const { id } = useParams();
  useEffect(() => {
    fetchDataFromApi(`channels?part=snippet&id=${id}`).then((data) => {
      console.log(data);
      setChannelDetails(data.items[0]);
    });
  }, [id]);

  useEffect(() => {
    fetchDataFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        console.log(data);
        setChannelVideos(data.items);
      }
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <div style={{ backgroundColor: "white", height: "300px" }}></div>
      <Box
        sx={{
          boxShadow: "none",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "356px", md: "320px" },
          height: "326px",
          margin: "auto",
          marginTop: "-90px",
        }}
      >
        <Link to={`/channel/${channelDetails?.id?.channelId}`}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              color: "#fff",
            }}
          >
            <CardMedia
              image={
                channelDetails?.snippet?.thumbnails?.high?.url ||
                demoProfilePicture
              }
              alt={channelDetails?.snippet?.title}
              sx={{
                borderRadius: "50%",
                height: "180px",
                width: "180px",
                mb: 2,
                border: "1px solid #e3e3e3",
              }}
            />
            <Typography variant="h6">
              {channelDetails?.snippet?.title}{" "}
              <CheckCircleIcon
                sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
              />
            </Typography>
            {channelDetails?.statistics?.subscriberCount && (
              <Typography
                sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
              >
                {parseInt(
                  channelDetails?.statistics?.subscriberCount
                ).toLocaleString("en-US")}{" "}
                Subscribers
              </Typography>
            )}
          </CardContent>
        </Link>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={channelVideos} />
      </Box>
    </Box>
  );
};

export default ChannelDetails;
