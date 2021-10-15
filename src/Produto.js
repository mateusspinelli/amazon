import React from 'react'
import './css/Produto.css'
import { useStateValue } from "./StateProvider"

function Produto({id, titulo, preco, avaliacao, img}) {

    const [{carrinho}, dispatch] = useStateValue();
    
    const addAoCarrinho = () => {
        dispatch({
            type: 'ADD_AO_CARRINHO',
            item: {
                id: id,
                titulo: titulo,
                preco: preco,
                avaliacao: avaliacao,
                img: img
            }
        })
    };


    return (
        <div className="produto">
            <div className="produto__info">

                <p>{titulo}</p>

                <p className="produto__preco">
                    <small>R$</small>
                    <strong>{preco}</strong>
                </p>

                <div className="produto__avaliacao">
                    <p> {"⭐".repeat(avaliacao)}</p>
                </div>

            </div>




            <img src={img} alt=""></img>

            <button onClick={addAoCarrinho}>Adicionar ao carrinho</button>
        </div>
    )
}

export default Produto
