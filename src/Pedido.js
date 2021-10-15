import React from 'react'
import './css/Pedido.css'
import moment from "moment"
import ProdutoCarrinho from "./ProdutoCarrinho"
import CurrencyFormat from "react-currency-format"

function Pedido({order}) {
    return (
        <div className="pedido">
            <h2>Pedido</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="pedido__id">
                <small>{order.id}</small>
            </p>
            {order.data.carrinho?.map(item => (
                <ProdutoCarrinho
                    id = {item.id}
                    titulo = {item.titulo}
                    img = {item.img}
                    preco = {item.preco}
                    avaliacao = {item.avaliacao}
                    hideButton
                />
            ))}

            <CurrencyFormat
                renderText={(value) => (
                        <h3 className="pedido__total">
                            Total: {value}
                        </h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"R$"}
            />

        </div>
    )
}

export default Pedido
