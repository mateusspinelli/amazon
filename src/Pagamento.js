import { Link, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import './css/Pagamento.css'
import ProdutoCarrinho from './ProdutoCarrinho';
import { useStateValue } from "./StateProvider"
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";

function Pagamento() {
    const [{carrinho, user}, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(carrinho) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [carrinho])

    console.log('O segredo é: ', clientSecret)

    const handleSubmit = async event => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

            db
             .collection('users')
             .doc(user?.uid)
             .collection('orders')
             .doc(paymentIntent.id)
             .set({
                 carrinho: carrinho,
                 amount: paymentIntent.amount,
                 created: paymentIntent.created
             })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/pedidos')
        })
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className="pagamento">
            <div className="pagamento__container">

                <h1>
                    Carrinho (<Link to="/carrinho">{carrinho?.length} Item </Link>)
                </h1>




                <div className="pagamento__section">


                    <div className="pagamento__titulo">
                        <h3>Items 'o'</h3>
                    </div>


                    <div className="pagamento__itens">
                        {carrinho.map(item => (
                            <ProdutoCarrinho
                            id = {item.id}
                            titulo = {item.titulo}
                            img = {item.img}
                            preco = {item.preco}
                            avaliacao = {item.avaliacao}
                            />
                        ))}
                    </div>
                    
                </div>


                <div className="pagamento__section">
                    <div className="pagamento__titulo">
                        <h3>Metodo Pagamento</h3>
                    </div>
                    <div className="pagamento__detalhes">
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange} />

                                <div className="pagamento__precoContainer">


                                    <CurrencyFormat
                                        renderText={(value) => (
                                                <h3>
                                                    Total: {value}
                                                </h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(carrinho)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"R$"}
                                    />

                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processando</p> : "Compre Agora"}</span>
                                    </button>
                                </div>

                                    {error && <div>{error}</div>}

                            </form>
                    </div>

                </div>
                

            </div>
        </div>
    )
}

export default Pagamento
