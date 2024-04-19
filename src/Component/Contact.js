import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SendIcon from "@mui/icons-material/Send";
import LanguageIcon from "@mui/icons-material/Language";
import { Box, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const LSFunction = () => {
    localStorage.getItem("data", data);
    console.log(data);
  };
  return (
    <>
      <Box className="main-div mediaQueryContact">
        <Box className="div1-data">
          <Box
            className="form-shift"
            style={{ gap: "5px", display: "flex", flexDirection: "column" }}
          >
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              type="text"
              placeholder="Name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <br />
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              type="text"
              placeholder="Email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <br />

            <TextField
              id="standard-basic"
              label="Subject"
              variant="standard"
              className="input-style"
              type="text"
              placeholder="subject"
              value={data.subject}
              onChange={(e) => setData({ ...data, subject: e.target.value })}
            />
            <br />

            <TextField
              className="input-style"
              name="message"
              id="standard-basic"
              label="Message"
              variant="standard"
              type="textArea"
              placeholder="Message"
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
            />
            <br />
            <Button
              onClick={() => LSFunction()}
              variant="contained"
              disableElevation
            >
              Send Message
            </Button>
          </Box>
        </Box>

        <Box className="Main-div2-content">
          <Box className="div2-content">
            <Box className="paddingTop40">
              <Typography className="Contact-content">Contact Us</Typography>
              <Box className="padding">
                <Typography>
                  We are open for any suggestion or just have a chat
                </Typography>
              </Box>
            </Box>
            <Box className="flex padding">
              <Box>{<LocationOnIcon />}</Box>
              <Box>
                <Typography className="margin-top font-weight ">
                  Address
                </Typography>
              </Box>
              <Box>
                <Typography className="margin-top">
                  Softmind sector 2
                </Typography>
              </Box>
            </Box>
            <Box className="flex padding">
              <Box>
                <LocalPhoneIcon />
              </Box>
              <Typography className="font-weight margin-top">Phone</Typography>
              <Typography className="margin-top  textgrey">
                {" "}
                1800-2872-00
              </Typography>
            </Box>
            <Box className="flex padding">
              <Box>
                <SendIcon />
              </Box>
              <Box>
                <Typography className="margin-top font-weight">
                  Email:
                </Typography>
              </Box>
              <Box>
                <Typography className="margin-top textgrey">Sandip@</Typography>
              </Box>
            </Box>
            <Box className="flex padding">
              <Box>
                <LanguageIcon />
              </Box>
              <Box>
                <Typography className="margin-top font-weight">
                  Website
                </Typography>
              </Box>
              <Box>
                <Typography className="margin-top font-weight textgrey">
                  Softmind.com
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
