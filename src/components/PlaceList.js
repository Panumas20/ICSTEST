import React from "react";
import Data from "../example_data.json";
import {TestRoute} from "../TestRoute";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {Button, CardActionArea, Grid, Icon} from "@mui/material";
import {borderColor, flexbox} from "@mui/system";
import {Box} from "@mui/material";
import {Outlet, Link} from "react-router-dom";

const test = (value) => {
  <Link to={`/Test`}>Your Name</Link>;
};

export const PlaceList = () => {
  const Date = (value) => {
    return value
      .filter((item) => item.day === "Monday")
      .map((item) => `${item.time_open} AM - ${item.time_close} PM`);
  };

  const info = Data.map((item) => (
    <Grid key={item.id} item xs={12} sm={6} md={4}>
      <Card
        sx={{
          bgcolor: "background.paper",
          m: 1,
          borderColor: "primary.main",
          width: "auto",
          maxWidth: "auto",
          boxShadow: 3,
        }}>
        <CardActionArea
          component={Link}
          to={`/placedetail/${item.id}`}
          state={item}>
          <CardHeader
            avatar={
              <Avatar
                src={item.profile_image_url}
                variant="rounded"
                sx={{width: 60, height: 60}}></Avatar>
            }
            action={
              <Typography display="flex" sx={{pr: 2, pt: 5}}>
                <FiberManualRecordIcon
                  color="primary"
                  sx={{width: "15px", pr: 1}}
                />
                {item.rating}
              </Typography>
            }
            title={
              <Typography variant="body1" sx={{fontWeight: "bold"}}>
                {item.name}
              </Typography>
            }
            subheader={`${Date(item.operation_time)}`}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 1,
              m: 1,
              mb: "5%",
              width: "90%",
            }}>
            <ImageList
              gap={0}
              sx={{
                maxWidth: "auto",
                height: "100px",
                borderRadius: "10px",
              }}
              cols={3}>
              {item.images.map((imgs, index) => (
                <ImageListItem key={index}>
                  <img src={`${imgs}`} style={{height: "150px"}} />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </CardActionArea>
      </Card>
    </Grid>
  ));

  return (
    <Box>
      <Grid container spacing={2}>
        {info}
      </Grid>
    </Box>
  );
};
