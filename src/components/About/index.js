import React from "react";
import { Container, Typography, IconButton, Grid, Box } from "@mui/material";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { BsBootstrapFill } from "react-icons/bs";
import { SiJavascript, SiMongodb, SiApollographql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiGitBranch } from "react-icons/bi";
import { GrMysql, GrGraphQl } from "react-icons/gr";
import { Divider } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import avatar from "../../img/avatar.jpg";
import "./style.css";

function About() {
  return (
    <>
      <Box
        textAlign={"center"}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <img
          style={{
            paddingTop: "5px",
            borderRadius: "50%",
            height: "200px",
          }}
          src={avatar}
          alt="avatar image"
        ></img>
      </Box>
      <Grid
        container
        spacing={0}
        direction="column"
        alignContent="center"
        justify="center"
        style={{ minHeight: "61vh", paddingTop: "30px" }}
      >
        <Container
          maxWidth="md"
          style={{ paddingTop: "20px", color: "#F0EBD8" }}
        >
          <Typography
            variant="body1"
            align="center"
            sx={{ fontSize: { lg: 16, md: 14, sm: 10 } }}
            paragraph
          >
            Hello! My name is Adam and I am a full-stack developer. I have just
            recently graduated from the UC Berkely Extension Full-Stack Web
            Development bootcamp, and am looking for opportunities in that
            field! While I am not coding, I enjoy to cook, play golf and cheer
            on my favorite sports teams!
          </Typography>
        </Container>
        <Container maxWidth="sm">
          <Box textAlign="center" sx={{ borderBottom: "solied 1px" }}>
            <Divider
              sx={{
                backgroundColor: "#F0EBD8",
                mb: "1px",
              }}
            />
          </Box>
          <Box textAlign="center" sx={{ mb: "10px" }}>
            <IconButton
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/adam-secord-2b56726b/",
                  "_blank"
                )
              }
            >
              <LinkedInIcon
                style={{ color: "#F0EBD8", paddingRight: "5px" }}
                fontSize="large"
              />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open("https://github.com/asecord92", "_blank")
              }
            >
              <GitHubIcon
                style={{ color: "#F0EBD8", paddingRight: "5px" }}
                fontSize="large"
              />
            </IconButton>
            <IconButton
              onClick={() => (window.location = "mailto:ats92@cox.net")}
            >
              <EmailIcon
                fontSize="large"
                style={{ color: "#F0EBD8", paddingRight: "5px" }}
              />
            </IconButton>
          </Box>
        </Container>

        <Typography
          variant="h6"
          sx={{
            color: "#F0EBD8",
          }}
          textAlign={"center"}
        >
          Skills
        </Typography>
        <Container maxWidth="sm">
          <Box textAlign="center" sx={{ borderBottom: "solied 1px" }}>
            <Divider
              sx={{
                backgroundColor: "#F0EBD8",
                mb: "10px",
              }}
            />
          </Box>
        </Container>

        <Box
          className="skills"
          sx={{
            width: "80%",
            fontSize: 24,
            color: "#F0EBD8",
            display: "flex",
            mt: "10px",
            pl: { lg: "100px", xs: "40px" },

            justifyContent: "space-between",
          }}
        >
          <AiFillHtml5 className="html" />
          <DiCss3 className="css" />
          <BsBootstrapFill className="boot" />
          <SiJavascript className="js" />
          <FaReact className="react" />
          <GrGraphQl className="graph" />
          <SiApollographql className="apollo" />
          <GrMysql className="mysql" />
          <SiMongodb className="mongo" />
          <BiGitBranch className="git" />
        </Box>
      </Grid>
    </>
  );
}

export default About;
