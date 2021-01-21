import React, {useEffect} from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Carrinho from "./Carrinho";
import Login from "./Login";
import Pagamento from "./Pagamento";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Pedidos from "./Pedidos";
import Footer from "./Footer";

const promise = loadStripe("pk_test_51I0AZ7HmlmGb0ed6P9Ncidox3D4b8t1iPblBMCHj8XGKxb685pw1xo4xTrNrR2upStn7VNVSwrLaBORJdMuBe9gh00BeZBtMfU");

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log("O USUARIO É: ", authUser);

      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }

    })
  }, [])


  return (
    <Router>


      <div className="App">
        <Switch>


          <Route path="/carrinho">
            <Header></Header>
            <Carrinho></Carrinho>
          </Route>


          <Route path="/login">
            <Login/>
          </Route>


          <Route path="/pagamento">
            <Header></Header>
            <Elements stripe={promise}>
              <Pagamento></Pagamento>
            </Elements>
          </Route>


          <Route path="/pedidos">
            <Header></Header>
            <Pedidos></Pedidos>
          </Route>


          <Route path="/">
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>


        </Switch>
      </div>


    </Router>
  );
}

export default App;
