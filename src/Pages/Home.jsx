import Header from "../componenets/Header";
import Firstpage from "../componenets/Firstpage";
import Sidenav from "../componenets/Sidenav";
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Shop from "./Shop"
import Routespages from "../Pages/Routespages"

export default function Home() {

	return(
		<>
		<Header/>
		<Sidenav/>
		<Routespages/>
	 
		</>
)}