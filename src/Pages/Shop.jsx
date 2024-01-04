import Shopheader from "../componenets/Shopheader"
import ProductCard from "../componenets/ProductCard"
import Ads from "../componenets/Ads"
import Sidenav from "../componenets/Sidenav"
import Footer from "../componenets/Footer";
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

export default function Shop() {
	return(
		<>
	 <Container sx={{ py: 5, backgroundImage: `url(${bg})`, backgroundSize:"cover",  }}>
		<Shopheader/>
		<Ads/>
		<Sidenav/>
		<ProductCard/>
		<Footer/>
	</Container>
	    </>
)}