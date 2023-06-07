import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoUrl,
} from "../assets/services/constant";

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((video) => (
        <Card
          key={video.id.videoId}
          sx={{
            width: {
              md: "300px",
              xs: "100%",
            },
          }}
          p={2}
        >
          <Link
            to={
              video.id.videoId ? `/video/${video.id.videoId}` : { demoVideoUrl }
            }
          >
            <CardMedia
              component="img"
              height="140"
              image={video.snippet?.thumbnails?.high?.url}
              alt="video-img"
            />
          </Link>

          <CardContent
            sx={{
              backgroundColor: "#1e1e1e",
              height: "100px",
            }}
          >
            <Link
              to={
                video.snippet.title
                  ? `/video/${video.id.videoId}`
                  : { demoVideoUrl }
              }
            >
              <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                {video.snippet.title.slice(0, 60)}
              </Typography>
            </Link>
            <Link
              to={
                video.snippet.channelId
                  ? `/channel/${video.snippet.channelId}`
                  : { demoChannelUrl }
              }
            >
              <Typography variant="subtitle1" fontWeight="bold" color="gray">
                {video.snippet.channelTitle
                  ? video.snippet.channelTitle
                  : demoChannelTitle}
                <CheckCircleIcon
                  sx={{ fontSize: 12, ml: "4px", color: "gray" }}
                ></CheckCircleIcon>
              </Typography>
            </Link>
            <Typography
              variant="subtitle2"
              sx={{
                color: "white",
              }}
            >
              {video.snippet.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};

export default Videos;
