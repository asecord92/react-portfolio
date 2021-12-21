import React from 'react';
import {Container, Typography} from '@mui/material';

function About() {
    return (
        <section>
        <Container maxWidth='md'>
            <Typography variant='h6' align='center' paragraph>
            Hello! My name is Adam Secord, and this is a compilation of all the work I am (mostly) proud of! I started my journey into coding only recently, but it something that I have always found so intriguing. Prior to this endevour, I have spent most of my professional career working in the healthcare field, ranging from being a first responder up to what I am currently doing, which has to do with coordinating healthcare-based research intiatives. So as you can tell, trying to jump into a career in coding is quite the change, but a very welcomed one. My goal is to gather as much knowledge as possible, and to achieve my goal of becoming a web developer! Outside of work, I love to both play and watch sports. My time away from my computer is typically spent watching some of my favorite teams, golfing or just being outside.

            </Typography>
        </Container>
        </section>
    )
}

export default About;
