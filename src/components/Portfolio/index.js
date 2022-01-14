import React from "react";
import {
  CssBaseline,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

function Portfolio() {
  const portfolioProjects = [
    {
      title: "ConnectUs",
      technology: "JavaScript, Handlebars, Sequilize",
      image: "connectus.png",
      description:
        "This app is a way to connect you people, make friends, find support, and explore your interests. Thousands of events are happening every day, both online and in person!",
      repo: "https://github.com/asecord92/connectus",
      app: "https://asecord-connectus.herokuapp.com/",
    },
    {
      title: "Budget Tracker",
      technology: "Mongoose, Express, React, Node, GraphQL",
      image: "pet.png",
      description:
        "Pet Panel is an forum discussion webpage. Users are able to submit their own posts to categories, and comment on the posts of other users. In the future, users will be able to use the Pet Finder API to search for animal shelters in their area",
      repo: "https://project-pet-panel.herokuapp.com/",
      app: "https://project-pet-panel.herokuapp.com/",
    },
    {
      title: "Brew Finder",
      technology: "JavaScript",
      image: "brew.png",
      description:
        "Brew Finder is an application that allows you to search for a brewery by city. A short description and a location finder provides you with additional information about the brewery.",
      repo: "https://github.com/asecord92/brew-finder",
      app: "https://asecord92.github.io/brew-finder/",
    },
    {
      title: "Note Taker",
      technology: "Javascript, Node, Express",
      image: "note-taker.png",
      description:
        "This application allows users to enter notes and store them in a database. We are able to leverage routes for both HTML pages as well as for notes found in the application. Notes are pulled when the page is loaded, and stored on the left hand side. When you enter a new note, you are given the option to save. Clicking saved notes displays them in the center of the page, however does not allow you to write over them. Future functionality includes the ability to delete.",
      repo: "https://github.com/asecord92/note-taker-app",
      app: "https://asecord-note-taker1.herokuapp.com/",
    },
    {
      title: "Work Day Scheduler",
      technology: "HTML, JQuery",
      image: "work.png",
      description:
        "The purpose of this application is to dynamically create a task list for a given work day. Using Moment.Js, the task list automatically updates color based one what time of day it is realtive to the time that is seen on the page. It will be grey for past times, red for present and green for future. This application also allows users to save their tasks locally, to access whenver the page is refreshed.",
      repo: "https://github.com/asecord92/daily-work-schedule",
      app: "https://asecord92.github.io/daily-work-schedule/",
    },
    {
      title: "Timed Quiz",
      technology: "JavaScript",
      image: "quiz.png",
      description:
        "A short timed quiz to demonstrate and understanding of JavaScript",
      repo: "https://github.com/asecord92/quiz",
      app: "https://asecord92.github.io/quiz/",
    },
  ];

  return (
    <>
      <Container style={{ padding: "20px 0" }} maxWidth="lg">
        <Grid
          container
          spacing={4}
          style={{
            paddingBottom: "20px",
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
        >
          {portfolioProjects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  title={project.title.default}
                  src={project.image}
                />
                <CardContent style={{ flexGrow: "1" }}>
                  <Typography gutterBottom variant="h5">
                    {project.title}
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    {project.technology}
                  </Typography>
                  <Typography variant="body2">{project.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => window.open(project.repo, "_blank")}
                  >
                    <GitHubIcon />{" "}
                  </Button>
                  <Button
                    size="small"
                    onClick={() => window.open(project.app, "_blank")}
                  >
                    View Application
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Portfolio;
