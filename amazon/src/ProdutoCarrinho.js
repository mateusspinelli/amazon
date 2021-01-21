import React from 'react'
import './css/ProdutoCarrinho.css'
import { useStateValue } from "./StateProvider"

function ProdutoCarrinho({id, titulo, img, preco, avaliacao, hideButton}) {
    const [{carrinho}, dispatch] = useStateValue();

    const removerDoCarrinho = () => {
        dispatch({
            type: "REMOVER_DO_CARRINHO",
            id: id,
        })
    }


    return (
        <div className="produtoCarrinho">
            <img className="produtoCarrinho__img" src={img} alt=""></img>

            <div className="produtoCarrinho__info">

                <p className="produtoCarrinho__titulo">{titulo}</p>

                <p className="produtoCarrinho__preco">
                    <small>R$</small>
                    <strong>{preco}</strong>
                </p>

                <div className="produtoCarrinho__avaliacao">
                    <p> {"⭐".repeat(avaliacao)}</p>
                </div>
                {!hideButton && (
                <button onClick={removerDoCarrinho}>Remover do carrinho</button>
                )}
            </div>
        </div>
    )
}

export default ProdutoCarrinho
