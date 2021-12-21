import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Link } from '@mui/material';
import { Height } from '@mui/icons-material';


function Portfolio() {
    const portfolioProjects = [
        {
            title: 'Brew Finder',
            technology:'JavaScript',
            image:'',
            description:'Brew Finder is an application that allows you to search for a brewery by city. A short description and a location finder provides you with additional information about the brewery.',
            repo: 'https://github.com/asecord92/brew-finder',
            app:'https://asecord92.github.io/brew-finder/'
        },
        {
            title:'Note Taker',
            technology:'Javascript, Node, Express',
            image:'note-taker.jpg',
            description:'This application allows users to enter notes and store them in a database. We are able to leverage routes for both HTML pages as well as for notes found in the application. Notes are pulled when the page is loaded, and stored on the left hand side. When you enter a new note, you are given the option to save. Clicking saved notes displays them in the center of the page, however does not allow you to write over them. Future functionality includes the ability to delete.',
            repo:'https://github.com/asecord92/note-taker-app',
            app:'https://asecord-note-taker1.herokuapp.com/'
        },
        {
            title: 'Work Day Scheduler',
            technology: 'HTML, JQuery',
            image:'work.png',
            description:'The purpose of this application is to dynamically create a task list for a given work day. Using Moment.Js, the task list automatically updates color based one what time of day it is realtive to the time that is seen on the page. It will be grey for past times, red for present and green for future. This application also allows users to save their tasks locally, to access whenver the page is refreshed.',
            repo: 'https://github.com/asecord92/daily-work-schedule',
            app: 'https://asecord92.github.io/daily-work-schedule/'
        },
        {
            title: 'ConnectUs',
            technology: 'JavaScript, Handlebars, Sequilize',
            image: 'connectus.png',
            description: 'This app is a way to connect you people, make friends, find support, and explore your interests. Thousands of events are happening every day, both online and in person!',
            repo: 'https://github.com/asecord92/connectus',
            app:'https://asecord-connectus.herokuapp.com/'
        },
        {
            title:'Budget Tracker',
            technology: 'JavaScript, Mongoose',
            image:'budget.png',
            description:'This is a Progressive Web Application that allows for the user to keep a track of their budget.',
            repo: 'https://github.com/asecord92/budget-time',
            app:'https://fathomless-sea-25261.herokuapp.com/'
        },
        {
            title: 'Timed Quiz',
            technology: 'JavaScript',
            image:'quiz.png',
            description:'A short timed quiz to demonstrate and understanding of JavaScript',
            repo:'https://github.com/asecord92/quiz',
            app:'https://asecord92.github.io/quiz/'
        }
    ]

    return (
        <Container maxWidth='md'>
            <Grid container spacing={4}>
                {portfolioProjects.map((project, index)=>(
                    <Grid item key={index}>
                        <Card>
                            <CardMedia
                                style= {{height:'20%'}}
                                image={project.image}
                                title={project.title}
                                src='../../public'
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    {project.title}
                                </Typography>
                                <Typography>
                                    {project.description}
                                </Typography> 
                            </CardContent>

                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Portfolio;