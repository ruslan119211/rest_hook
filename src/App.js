import React from "react";
import './style/App.css';
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./component/UI/Navbar/Navbar";
import {
    BrowserRouter,
    Routes,
    Route, NavLink
} from "react-router-dom";




function App(props) {

    return (

        <BrowserRouter>

            <Navbar/>
            <Routes>
                <Route path='/about' element={<About/>} />
                <Route path='/posts' element={<Posts/>} />

            </Routes>
        </BrowserRouter>
    )
}

export default App;
