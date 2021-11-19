import React from "react";
import { Typography, Box, Grid, Stack, Pagination } from "@mui/material";
import "./SearchBar.css";
import SelectDate from "../SearchFilter/SelectDate";
import SelectCategory from "../SearchFilter/SelectCategory";
import SelectSort from "../SearchFilter/SelectSort"
import SearchDesign from "../SearchDesign/SearchDesign";

function SearchBar() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ padding: "48px 48px"}}>

        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start">
            <Typography 
              sx={{
                marginBottom: "24px",
                fontWeight: "bold",
                fontSize: "20px",
                lineHeight: "28px",
              }}>Showing 68 Results for “How to”
            </Typography>
        </Grid>
          
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
          direction="row"
          justifyContent="center"
          alignItems="center"
          fullWidth
          sx={{ margin: "24px 0", height: "2px", backgroundColor: "#ECEEEF"}}>
        </Grid>
          
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start">
            <Box component={SearchDesign}></Box>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: "96px" }}>
            <Stack 
              spacing={2}>
                <Pagination count={10} shape="rounded" />
            </Stack>
        </Grid>
    </Grid>
  )
}

export default SearchBar;