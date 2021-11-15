import React from "react";
import { Typography, TextField, Box, Button, Grid, Link } from "@mui/material";
import InputAdornments from "./ShowPassword";

function SigninForm() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ margin: "120px 0"}}>

        <Typography
          sx={{
            marginBottom: "56px",
            fontFamily: "'Noto Sans', sans-serif",
            fontWeight: "bold",
            fontStyle: "normal",
            fontSize: "40px",
            lineHeight: "44px",
          }}>Welcome back!
        </Typography>

        {/* <Typography 
          component="p"
          sx={{
            mb: "56px",
            fontFamily: "'Noto Sans', sans-serif",
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: "20px",
            lineHeight: "28px",
            color: "#D74545",
          }}>Invalid email and password combination
        </Typography> */}

        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              mb: 1,
              width: "600px",},
            marginBottom: "32px",
            fontFamily: "'Noto Sans', sans-serif",}}
          noValidate
          autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined" />
        </Box>

        <Box
          component={InputAdornments}>
        </Box>

        <Button
          variant="contained"
          sx={{
            marginBottom: 1,
            width: "600px",
            height: "56px",
            textTransform: "none",
            fontFamily: "'Noto Sans', sans-serif",
            fontWeight: "Bold",
            fontStyle: "Normal",
            fontSize: "20px",
            backgroundColor: "#214457",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#2f5c74",
              boxShadow: "none"},
          }}>Sign In
        </Button>

        <Link
          href="#"
          underline="none"
          sx={{
            fontFamily: "'Noto Sans', sans-serif",
            fontWeight: "bold",
            fontStyle: "normal",
            fontSize: "14px",
            lineHeight: "25.2px",
            color: "#3E89AE",
          }}>
          {'Forgot password?'}
        </Link>
    </Grid>
  );
};

export default SigninForm;