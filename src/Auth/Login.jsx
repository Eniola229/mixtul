import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { auth } from "./Firebase";
import Swal from 'sweetalert2';
import UserDetails from './UserDetails';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, Redirect, Switch  } from 'react-router-dom';
import Signup from "./Signup"
import Footer from "../componenets/Footer";


const defaultTheme = createTheme();
export default function Login() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const [currentUser, setCurrentUser] = useState();
  



    {/* For all the signin logic*/}
    const signIn = (e) => {
      setIsLoading(true);
      e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentail) => {
          console.log(userCredentail)
          {/*This show if login is succesfully*/}
        Swal.fire({
          title: 'Login Successful',
          icon: 'success',
          confirmButtonText: 'Continue'
        })
    
          {/*Swal stops here*/}
        }).catch((err) => {
          setIsLoading(false);
           {/*If there is any error*/}
          Swal.fire({
          title: 'Oops...',
          text: (err.code),
          icon: 'error',
          confirmButtonText: 'OK'
        })
          {/*Swal stops here*/}
        })

    }

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else{
                setAuthUser(null)
            }
        });

        return () => {
            listen();
        }
    }, []);

  return (
    <>
    
    <ThemeProvider theme={defaultTheme}>
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
          <Avatar sx={{ m: 1, bgcolor: 'chocolate' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="32" stroke-dashoffset="32" d="M13 4L20 4C20.5523 4 21 4.44772 21 5V19C21 19.5523 20.5523 20 20 20H13"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M3 12h11.5" opacity="0"><set attributeName="opacity" begin="0.5s" to="1"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0"/></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M14.5 12l-3.5 -3.5M14.5 12l-3.5 3.5" opacity="0"><set attributeName="opacity" begin="0.7s" to="1"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="6;0"/></path></g></svg>
          </Avatar>
          <Typography component="h1" variant="h5">
          Login
          </Typography>

        {/* For all the showing usr info*/}
          <UserDetails/>
      <Box noValidate sx={{ mt: 1 }}>
        <form onSubmit={signIn} method="post">
              {/* For all the email details */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{border:"1px solid chocolate", placeholder:"chocolate",    '&:hover': {
     border:"1px solid chocolate"
    },
}}
            />
               {/* For all the password details */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{border:"1px solid chocolate", placeholder:"chocolate",    '&:hover': {
     border:"1px solid chocolate"
    },
}}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ background:"chocolate", mt: 3, mb: 2,  '&:hover': {
      backgroundColor: 'darkorange',
    }, }}
            >
             Login
            </Button>
            <Link to="/ALogin" sx={{color:"red", textDecoration:"none"}}>
            
              Admin Dashbaord

            </Link>
             <Grid container>
              <Grid item>
                  {"Don't have an account?"}  
                  <Link sx={{color:"brown"}} to='/Signup'>SignUp</Link>
              </Grid>
            </Grid>
            </form>
          </Box>
        </Box>
      </Container>
    </ThemeProvider> 
    <Footer/>
    </>
  );
}