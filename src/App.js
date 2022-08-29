import './App.css'
import React from 'react'
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";
import Bookmark from "./pages/Bookmark";
import NotFound from './pages/NotFound';
import contents_all from './server/contents_all'

export default function App() {

	return (
	<BrowserRouter>
			<Header/>
			
			<main>
				<Routes>
					<Route path="/" element={<Home contents_all={contents_all} />} />
					<Route path="about" element={<About contents_all={contents_all}/>} />
					<Route path="search/*" element={<Search contents_all={contents_all}/>} />
					<Route path="bookmark" element={<Bookmark />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>

			<footer>
				<p>© 2022 TIMES ON FILM - 역사별 영상물 검색엔진</p>
			</footer>

	</BrowserRouter>
	);
}
