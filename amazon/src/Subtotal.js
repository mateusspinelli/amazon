import React from 'react'
import "./css/Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const history = useHistory();
    const [{carrinho}, dispatch] = useStateValue();

    return (
        <div className="subtotal">

            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({carrinho.length} items): <strong>{value}</strong>
                        </p>

                        <small className="subtotal__presente">
                            <input type="checkbox"/> Esta compra é um presente?
                        </small>
                    </>
                )}






                decimalScale={2}
                value={getBasketTotal(carrinho)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}

            />
            <button onClick={e => history.push("/pagamento")}>Continue para o carrinho</button>
        </div>
    );
}

export default Subtotal
