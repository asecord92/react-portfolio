import React, { useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
  IconButton,
  Menu,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Nav(props) {
  const { currentPage, setCurrentPage } = props;
  useEffect(() => {
    document.title = `${currentPage}`;
  }, [currentPage]);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleResumeOpen = () => {
    window.open(
      "https://asecord92.github.io/react-portfolio//resume.pdf",
      "_blank"
    );
  };

  return (
    <AppBar
      style={{ backgroundColor: "#3E5C76", color: "#F0EBD8" }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex", cursor: "pointer" },
            }}
            onClick={() => setCurrentPage("About Me")}
          >
            Adam Secord
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  onClick={() => setCurrentPage("About Me")}
                  textAlign="center"
                >
                  About Me
                </Typography>
              </MenuItem>
              {/* <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  onClick={() => setCurrentPage("Contact Me")}
                  textAlign="center"
                >
                  Contact
                </Typography>
              </MenuItem> */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  onClick={() => setCurrentPage("Portfolio")}
                  textAlign="center"
                >
                  Portfolio
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography onClick={handleResumeOpen} textAlign="center">
                  Resume
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Adam Secord
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Button
              onClick={(handleCloseNavMenu, () => setCurrentPage("About Me"))}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              About Me
            </Button>
            {/* <Button
              onClick={(handleCloseNavMenu, () => setCurrentPage("Contact Me"))}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Contact Me
            </Button> */}
            <Button
              onClick={(handleCloseNavMenu, () => setCurrentPage("Portfolio"))}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Portfolio
            </Button>
            <Button
              onClick={(handleCloseNavMenu, handleResumeOpen)}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Resume
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;
