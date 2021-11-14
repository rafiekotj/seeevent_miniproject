import React from "react";
import { Typography, TextField, Box, Button, Grid, Link, Stack, Pagination } from "@mui/material";
import "./SearchBar.css";
import SelectDate from "../SearchFilter/SelectDate";
import SelectCategory from "../SearchFilter/SelectCategory";
import SelectSort from "../SearchFilter/SelectSort"
import SearchDesign from "../SearchDesign/SearchDesign";

function SearchBar() {
  return (
    <div>
      <Grid
        container
        direction="column"
        sx={{margin: "64px 108px 120px 108px"}}>

          <Typography 
            component="p"
            sx={{
              mb: "24px",
              fontWeight: "bold",
              fontStyle: "normal",
              fontSize: "20px",
              lineHeight: "28px",
            }}>
              Showing 68 Results for “How to”
          </Typography>
          
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start">
              <Box component={SelectDate}></Box>
              <Box component={SelectCategory}></Box>
              <Box component={SelectSort}></Box>
          </Grid>

          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{margin: "24px 0", width: "1224px", height: "2px", backgroundColor: "#ECEEEF"}}></Grid>
          
          <Grid
            container>
              <Box component={SearchDesign}></Box>
            </Grid>


          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: "96px" }}>
              <Stack 
                spacing={2}>
                  <Pagination count={10} shape="rounded" />
              </Stack>
          </Grid>
      </Grid>
    </div>
  )
}

export default SearchBar;