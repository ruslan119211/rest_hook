import React, {useContext} from 'react'
import MyInput from "../component/UI/input/MyInput";
import MyButton from "../component/UI/button/MyButton";
import {AuthContext} from "../context";


const Login =() => {
    const {isAuth,setIsAuth}=useContext(AuthContext)

    const login = e =>{
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }
    return(
        <>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Логин"/>
                <MyInput type="password" placeholder="Пароль"/>
                <MyButton>Войти</MyButton>
            </form>
        </>
    )
}
export default Login
