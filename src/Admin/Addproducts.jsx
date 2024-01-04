import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {storage} from "../Auth/Firebase";
import {useParams, useNavigate} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import { ref } from "firebase/storage";
import { uploadBytesResumable } from 'firebase/storage';
import { getDownloadURL } from 'firebase/storage';
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';
import { db } from "../Auth/Firebase";

const theme = createTheme({
  palette: {
    primary: {
      main: '#795548', // Chocolate
    },
    secondary: {
      main: '#8B4513', // SaddleBrown
    },
  },
});

const initialState = {
  name: "",
  ammount: "",
  rate: "",
  aval: "",
}

const Addproducts = () => {

  const [data, setData] = useState(initialState);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const {name, ammount, rate, aval } = data;
  const navigate = useNavigate();
  const [addSwitch, setAddSwitch] = useState(false);


  //for the image uploading
  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on("state_changed", (snapshot) => {
        const progress = 
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
        switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;

        default:
          break;
        }
      }, (error) => {
        console.log(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setData((prev) => ({...prev, img: downloadURL}))
        });
      }
      );
    };

    file && uploadFile()
  }, [file]);

  const handleSwitchChange = () => {
    setAddSwitch(!addSwitch);
  };

  //for errors

  const validate= () => {
    let errors = {};
    if(!name) {
      errors.name = "Product Name is Required";
    }
     if(!ammount) {
      errors.ammount = "ammount is Required";
    }
     if(!rate) {
      errors.rate = "Rate is Required";
    }
     if(!aval) {
      errors.aval = "Avaliable is Required";
    }
    
    return errors;
  };

  //for handling our form data

  const handleSubmit = async(e) => {
    e.preventDefault();

    let errors = validate();
    if (Object.keys(errors).length) return setErrors(errors);

    setIsSubmit(true);
    await addDoc(collection(db, "products"), {
      ...data,
      timestamp: serverTimestamp()
    })
    navigate("/Soop");

  }

  const handleChange= (e) => {
    setData({...data, [e.target.name]: e.target.value });
  };

 

  return (
    <ThemeProvider theme={theme}>
    {isSubmit ? <CircularProgress color="success" />:(
       <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={{ padding: 20 }}>
          <Typography component="h1" variant="h5" align="center" color="secondary.main">
            Upload Products
          </Typography>
          <form  onSubmit={handleSubmit}>
            <Grid sx={{display:"flex", flex:"flexWrap"}} container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Product Name"
                  value={name}
                  name="name"
                  error={errors.name ? {content: errors.name} : null}
                  onChange={handleChange}
                  fullWidth
                  autoFocus
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Rating"
                  value={rate}
                  name="rate"
                  error={errors.rate ? {content: errors.rate} : null}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Amount"
                  name="ammount"
                  error={errors.ammount ? {content: errors.ammount} : null}
                  value={ammount}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Avaliable"
                  name="aval"
                  error={errors.aval ? {content: errors.aval} : null}
                  value={aval}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sx={{ backgroundColor: 'chocolate', color: 'white', padding: 2, borderRadius: 5 }}>
                <InputLabel htmlFor="image-input" sx={{ color: 'white' }}>
                  Choose Image to add to product
                </InputLabel>
                <Input
                  type="file"
                  id="image-input"
                   onChange={(e)=> setFile(e.target.files[0])}
                  endAdornment={<PhotoCamera position="end" />}
                  sx={{ display: 'none' }}
                />
              </Grid>
              
            </Grid>
            <Box mt={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth

                disabled={progress !== null && progress < 100}
                sx={{
                  '&:hover': {
                    backgroundColor: '#d2691e', // DarkOrange
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
      )}
    </ThemeProvider>
  );
};

export default Addproducts;
