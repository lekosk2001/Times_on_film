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
					<Route path="Times_on_film" element={<Home contents_all={contents_all} />} />
					<Route path="Times_on_film/about" element={<About contents_all={contents_all}/>} />
					<Route path="Times_on_film/search/*" element={<Search contents_all={contents_all}/>} />
					<Route path="Times_on_film/bookmark" element={<Bookmark bookmarked_contents={[
						contents_all[5],contents_all[35],contents_all[23],contents_all[17],contents_all[42],contents_all[13],contents_all[52]
					]}/>} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>

			<footer>
				<p>© 2022 TIMES ON FILM - 역사별 영상물 검색엔진</p>
			</footer>

	</BrowserRouter>
	);
}
