import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
const getYear = () => new Date().getFullYear();
function Footer() {
  return (
    <Box
      textAlign={"center"}
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: "#3E5C76",
        color: "#F0EBD8",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">© {getYear()} Adam T. Secord</Typography>
      </Container>
    </Box>
  );
}

export default Footer;
