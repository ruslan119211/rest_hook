import React, {useContext} from 'react';
import {Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import NotFound from "../pages/NotFound";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import {AuthContext} from "../context";
import Loader from "./UI/loader/Loader";
// import {getRout} from "../router";

const AppRouter = () => {

   const {isAuth,isLoading} = useContext(AuthContext)

    if(isLoading){
        return <Loader/>
    }

    // let invoices = getRout();
    // const routeComponents = routes.map(({path, element}, key) => <Route path={path} element={element} key={key} />);
    return (

        isAuth
        ?
            <Routes>
                <Route path='*' element={<Posts/>}/>
                <Route path='/about' element={<About/>}/>
                <Route end path='/posts' element={<Posts/>}/>
                <Route end path='/posts/:id' element={<PostIdPage/>}/>
            </Routes>
            :

            <Routes>
                <Route path='*' element={<Login/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
    );
};

export default AppRouter;
