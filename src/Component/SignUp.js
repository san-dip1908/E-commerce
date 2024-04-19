import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Box, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  // const [emailData, setEmailData] = useState("");
  // const [passwordData, setPasswordData] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const [data, setData] = useState({
    emailData: "",
    passwordData: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const LSFunction = (e) => {
    e.preventDefault();
    let emailError = "";
    let passwordError = "";
    let confirmPasswordError = "";

    if (!data.emailData.trim()) {
      emailError = "Email is required";
    } else {
      emailError = "";
    }
    if (data.passwordData.length < 6) {
      passwordError = "Password should be atleast 6 character";
      console.log(passwordError)
    } else {
      passwordError = "";
    }
    if (data.passwordData !== data.confirmPassword) {
      confirmPasswordError = "Password do not match";
    } else {
      confirmPasswordError = "";
    }

    setError({
      emailError: emailError,
      passwordError: passwordError,
      confirmPasswordError: confirmPasswordError,
    });   

    console.log("error", error);

    if (
      !error.emailError &&
      !error.passwordError &&
      !error.confirmPasswordError
    ) {
      const local = JSON.stringify(data);
      localStorage.setItem("formData", local);
    }
  };

  return (
    <>
      <Box className="signing-data">
        <Box className="sub-signing-data">
          <Box>
            <Typography
              style={{
                fontSize: "35px",
                fontFamily: 800,
                textAlign: "center",
              }}
            >
              signup
            </Typography>
            <form className="form-content">
              <TextField
                fullWidth
                label="Email"
                type="email"
                required
                id="fullWidth"
                value={data.emailData}
                name="emailData"
                onChange={(e) =>
                  setData({ ...data, emailData: e.target.value })
                }
              />
              {error.email}
              <TextField
                fullWidth
                label="Create Password"
                id="fullWidth"
                value={data.passwordData}
                name="passwordData"
                type="password"
                onChange={(e) =>
                  setData({ ...data, passwordData: e.target.value })
                }
              />
              <TextField
                fullWidth
                label="Confirm Password"
                id="fullWidth"
                value={data.confirmPassword}
                name="confirmPassword"
                onChange={(e) =>
                  setData({ ...data, confirmPassword: e.target.value })
                }
              />

              <Button variant="contained" disableElevation onClick={LSFunction}>
                sign-up
              </Button>
              <Box className="sign-up-text-data">
                <Typography>Already have a account?</Typography>
                <Link to="/login">
                  <Box style={{ color: "var(--td_theme_color, #4db2ec)" }}>
                    Login
                  </Box>
                </Link>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SignUp;
