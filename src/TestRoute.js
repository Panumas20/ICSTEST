import React, {useState} from "react";
import {Routes, Route, useLocation, Link} from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {List} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconButton from "@mui/material/IconButton";
import {borderRadius} from "@mui/system";

export const TestRoute = (props) => {
  const location = useLocation();
  const propsData = location.state;
  return (
    <Container maxWidth="xl" sx={{pt: 5}}>
      <Button
        variant="contained"
        sx={{mb: 5, borderRadius: 30}}
        startIcon={<ArrowBackIosIcon />}
        component={Link}
        to={`/`}>
        <Typography variant="body1" fontWeight="Bold">
          BACK
        </Typography>
      </Button>
      <Box sx={{bgcolor: "#cfe8fc", height: "auto", borderRadius: "15px"}}>
        <Grid container spacing={3} sx={{p: 5}}>
          <Grid item xs={12} md={6}>
            <Card sx={{borderRadius: "15px"}}>
              <CardMedia
                component="img"
                height="300"
                image={propsData.profile_image_url}
                alt="green iguana"
              />
              <CardContent>
                <Box display={"flex"}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="h5" fontWeight="Bold">
                        {propsData.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{pt: 2}}>
                      <Typography variant="body1" fontWeight="Bold">
                        Address:
                      </Typography>
                    </Grid>
                    <Grid item xs={9} sx={{pt: 2}}>
                      <Typography>{propsData.address}</Typography>
                    </Grid>
                    <Grid item xs={3} sx={{pt: 2}} fontWeight="Bold">
                      <Typography sx={{pt: 0.5}}>Opening Hour:</Typography>
                    </Grid>
                    <Grid item xs={9} sx={{pt: 2}}>
                      <ul style={{display: "contents", lineHeight: 2}}>
                        {propsData.operation_time.map((item, index) => (
                          <li key={index} style={{display: "block"}}>
                            {`${item.day}`}
                            {item.time_open === "closed"
                              ? " : Closed"
                              : ` : ${item.time_open} -  ${item.time_close}`}
                          </li>
                        ))}
                      </ul>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={5} sx={{}}>
            <Card sx={{borderRadius: "15px"}}>
              <CardHeader
                title={
                  <Typography variant="h5" sx={{fontWeight: "bold"}}>
                    Images
                  </Typography>
                }
              />
              <CardContent>
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
                      height: "100%",
                      borderRadius: "15px",
                    }}
                    cols={0}>
                    {propsData.images.map((imgs, index) => (
                      <ImageListItem key={index}>
                        <img src={`${imgs}`} style={{height: "300px"}} />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
