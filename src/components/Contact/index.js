import React, {useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function Contact(){
    const [formState, setFormState] = useState({firstName: '', lastName: '', email: '', message: ''})
    const {firstName, lastName, email, message} = formState;

    function handleChange(e) {
      setFormState({...formState, [e.target.name]: e.target.value })
    }
    
    function handleSubmit(e) {
      e.preventDefault();
      console.log(formState);
    }

    return (
    <section>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Contact Me
          </Typography>
          <Box component="form" 
          onSubmit={handleSubmit} 
          noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  defaultValue={firstName}
                  autoFocus
                  onChange={handleChange}
                  onBlur={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  defaultValue={lastName}
                  onChange={handleChange}
                  onBlur={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  defaultValue={email}
                  onChange={handleChange}
                  onBlur={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                name= 'message'
                fullWidth
                multiline
                rows={4}
                defaultValue={message}
                label='Your Message Here'
                onChange={handleChange}
                onBlur={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
      </section>
    )

};

export default Contact;