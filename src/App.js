import Nav from "./components/Nav/index";
import About from "./components/About/index";
import Contact from "./components/Contact/index";
import Portfolio from "./components/Portfolio/index";
import { useState } from "react";
import { Typography, Container, Box } from "@mui/material";
import Footer from "./components/Footer/index";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("About Me");
  return (
    <>
      <Box
        style={{ backgroundColor: "#0D1321" }}
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "50vh",
        }}
      >
        <Container component="main" maxWidth="xl">
          <Typography variant="h2" component="h1" gutterBottom>
            <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
            {currentPage === "About Me" && <About />}
            {/* {currentPage === "Contact Me" && <Contact />} */}
            {currentPage === "Portfolio" && <Portfolio />}
          </Typography>
        </Container>
        <Footer />
      </Box>
    </>
  );
}

export default App;
