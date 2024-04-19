import React, { useEffect, useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
// import { red } from "@mui/material/colors";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let emailError = "";
    let passwordError = "";
    

    if (!email.trim()) {
      emailError = "Email is required";
    }

    if (!password.trim()) {
      passwordError = "Password is required";
    } else if (password.trim().length < 6) {
      passwordError = "Password should be at least 6 characters";
    }

    setError({ email: emailError, password: passwordError });

    if (!emailError && !passwordError) {
      console.log("Form submitted:", error);
      // Add your login logic here
    }
  };
  // console.log("error", error);

  return (
    <>
      <Box className="main-logging-data">
        <Box className="logging-data">
          <Box className="sublogging">
            <Typography
              style={{
                fontSize: "25px",
                fontWeight: 530,
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Login
            </Typography>
            <TextField
              sx={{ marginBottom: "20px", width: "330px" }}
              label="Email"
              id="fullWidth"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error.email && <div style={{ color: "red" }}>{error.email}</div>}

            <TextField
              sx={{ width: "330px" }}
              label="Create Password"
              id="fullWidth"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error.password && (
              <div style={{ color: "red" }}>{error.password}</div>
            )}

            <Typography
              style={{
                textAlign: "center",
                color: "var(--td_theme_color, #4db2ec)",
                marginTop: "15px",
              }}
            >
              Forgot password?
            </Typography>
            <Button
              style={{ marginTop: "25px", width: "330px" }}
              className="login-btn  "
              variant="contained"
              disableElevation
              onClick={handleSubmit}
            >
              Login
            </Button>

            <Box sx={{ display: "flex", marginTop: "20px" }}>
              <Box>
                <Typography>Don't have an account? </Typography>
              </Box>
              <Box>
                <Link to="/signup" style={{ color: "skyblue" }}>
                  signup
                </Link>
              </Box>
            </Box>
            <Box>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                Or
              </Typography>
              <hr />
            </Box>

            <Button
              style={{ marginTop: "20px", width: "330px" }}
              className="login-btn "
              variant="contained"
              disableElevation
            >
              Login with Facebook
            </Button>
            <Button
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "15px",

                width: "330px",
              }}
              variant="outlined"
            >
              <GoogleIcon /> Login with Google
            </Button>
          </Box>
        </Box>
      </Box>
      {error && (
        <Typography
          style={{
            color: "red",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          {/* {error} */}
        </Typography>
      )}
    </>
  );
};

export default Login;
