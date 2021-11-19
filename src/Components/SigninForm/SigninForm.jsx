import React, { useState } from "react";
import {
  Typography,
  TextField,
  Box,
  Button,
  Grid,
  Link,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/action/authAction";

function SigninForm() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );

  const validPassword = new RegExp(
    "^(?=.*?[A-Za-z])(?=.*[!@#$%^&*])(?=.*?[0-9]).{8,}$"
  );

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [emailErr, setEmailErr] = useState(false);
  // const [pwdError, setPwdError] = useState(false);
  const validate = () => {
    // if (!validEmail.test(email)) {
    //   setEmailErr(true);
    // }
    // if (!validPassword.test(password)) {
    //   setPwdError(true);
    // }
    const valSurat = validEmail.test(email);
    const valSandi = validPassword.test(password);
    if (valSurat && valSandi) {
      const data = {
        email,
        password,
      };
      dispatch(login(data));
    }
    console.log(valSurat);
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ margin: "120px 0" }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ marginBottom: "56px" }}
      >
        <Typography
          sx={{
            marginBottom: "8px",
            fontFamily: "'Noto Sans', sans-serif",
            fontWeight: "bold",
            fontStyle: "normal",
            fontSize: "40px",
            lineHeight: "44px",
          }}
        >
          Welcome back!
        </Typography>

        {/* <Box>
          {emailErr ? (
            <Typography
              sx={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: "normal",
                fontStyle: "normal",
                fontSize: "18px",
                lineHeight: "28px",
                color: "#D74545",
              }}
            >
              Invalid email and password combination
            </Typography>
          ) : pwdError ? (
            <Typography
              sx={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: "normal",
                fontStyle: "normal",
                fontSize: "18px",
                lineHeight: "28px",
                color: "#D74545",
              }}
            >
              Invalid email and password combination
            </Typography>
          ) : null}
        </Box> */}
      </Grid>

      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            mb: 1,
            width: "600px",
          },
          marginBottom: "32px",
          fontFamily: "'Noto Sans', sans-serif",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>

      <Box>
        <FormControl
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            fontFamily: "'Noto Sans', sans-serif",
            width: "600px",
            marginBottom: "40px",
          }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Box>

      <Button
        onClick={validate}
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
            boxShadow: "none",
          },
        }}
      >
        Sign In
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
        }}
      >
        {"Forgot password?"}
      </Link>
    </Grid>
  );
}

export default SigninForm;
