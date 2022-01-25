import React, {useEffect, useState} from "react";
import './style/App.css';
import Navbar from "./component/UI/Navbar/Navbar";
import {
    BrowserRouter,
} from "react-router-dom";
import AppRouter from "./component/AppRouter";
import {AuthContext} from "./context";


function App(props) {

    const [isAuth,setIsAuth] = useState(false)
    const [isLoading,setLoading] = useState(true)

    useEffect(()=>{
        if(localStorage.getItem('auth')){
            setIsAuth(true)
        }
        setLoading(false)
    },[])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                {
                    isAuth
                    ? <Navbar/>
                    : <h2>Войдите</h2>


                }

                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;
