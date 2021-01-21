import React from 'react'
import './css/Carrinho.css'
import { useStateValue } from "./StateProvider";
import ProdutoCarrinho from "./ProdutoCarrinho";
import Subtotal from "./Subtotal";

function Carrinho() {
    const [{carrinho, user}, dispatch] = useStateValue();

    return (
        <div className="carrinho">

            <div className="carrinho__1">
                {carrinho?.length === 0 ? (
                    <div>
                        <h2 className="carrinho__titulo">Seu Carrinho de Compras está vazio</h2>
                        <p>Compre ofertas do dia</p>
                    </div>
                ) : (
                    <div>
                        <h3>Olá, {!user ? "faça login para continuar" : user.email}</h3>
                        <h2 className="carrinho__titulo">Seu Carrinho de Compras</h2>
                        {carrinho?.map((item) => (
                            <ProdutoCarrinho
                                id = {item.id}
                                titulo = {item.titulo}
                                img = {item.img}
                                preco = {item.preco}
                                avaliacao = {item.avaliacao}
                            />
                        ))}
                        
                    </div>
                )}
            </div>
            {carrinho.length > 0 && (
                <div className="carrinho__2">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Carrinho
