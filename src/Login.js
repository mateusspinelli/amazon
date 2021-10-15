import React, {useState} from 'react'
import "./css/Login.css"
import {Link, useHistory} from "react-router-dom";
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth) =>{
            console.log(auth);
            if (auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">

            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""></img>
            </Link>


            <div className="login__container">
                <h1>Fazer Login</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Senha</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" onClick={signIn} className="login__btn1">Continuar</button>
                </form>

                <p>
                Ao continuar, você concorda com as Condições de Uso da Amazon. Por favor verifique a Notificação de Privacidade, Notificação de Cookies e a Notificação de Anúncios Baseados em Interesse.
                </p>

                <button onClick={register} className="login__btn2">Criar sua conta da Amazon</button>

            </div>
        </div>
    )
}

export default Login
