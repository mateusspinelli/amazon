import React from 'react'
import './css/Header.css'
import {Link} from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from './StateProvider'
import { auth } from "./firebase"

function Header() {
    const [{carrinho, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }


    return (
        <nav className="header">


            <Link to="/">

                    <img className="header__logo" 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""></img>
            </Link>


            <div className="header__busca">
                <input type="text" className="header__buscaInput"></input>
                <SearchIcon className="header__buscaIcon"></SearchIcon>
            </div>

            <div className="header__nav">


                <Link to={!user && "/login"} className="header__link">
                    <div onClick={handleAuthentication} className="header__opcoes">
                        <span className="header__opcoesL1">Olá {!user ? "" : user.email}</span>
                        <span className="header__opcoesL2">{user ? "Sair da Conta" : "Faça seu login"}</span>
                    </div>
                </Link>


                <Link to="/pedidos" className="header__link">
                    <div className="header__opcoes">
                        <span className="header__opcoesL1">Devoluções</span>
                        <span className="header__opcoesL2">e Pedidos</span>
                    </div>
                </Link>


                <Link to="/carrinho" className="header__link">
                    <div className="header__opcoesCarrinho">
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                        <span className="header__opcoesL2 header__carrinhoContador">{carrinho?.length}</span>
                    </div>
                </Link>


            </div>

        </nav>
    )
}

export default Header
