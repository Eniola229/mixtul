import Header from "../componenets/Header";
import Firstpage from "../componenets/Firstpage";
import Sidenav from "../componenets/Sidenav";
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Shop from "./Shop"
import Routespages from "../Pages/Routespages"
import {
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  styled,
  Snackbar,
} from '@mui/material';

import bg from "../images/bg.jpg";


export default function Home() {

	return(
		<div>
		<Header/>
		<Sidenav/>
		<Routespages/>
		</div>
)}