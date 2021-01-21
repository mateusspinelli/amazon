const functions = require('firebase-functions');
const express = require("express");
const cors = require ("cors");
const stripe = require("stripe")('sk_test_51I0AZ7HmlmGb0ed6vqXCaYdW6jpJ8gvxsebKuSCpyLxZBotrSpnt6vgYjp9NxFRcLfe5lVmbRA23a5pwi5dwTfSL00k4GOjc0L')


// API

// APP CONFIG
const app = express();

// MIDDLEWARES
app.use(cors({ origin: true}));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send("OI LINDA"))

app.post('/payments/create', async (request, response) => {

    const total = request.query.total;

    console.log('Pagamento recebido: ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    // Ok -- Criado
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });


});

// LISTEN COMMAND
exports.api = functions.https.onRequest(app);


// http://localhost:5001/clone-ecf29/us-central1/api