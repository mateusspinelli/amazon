import axios from "axios";

const instance = axios.create({

    // ASSINAR PLANO BLAZE E COLOCAR O LINK CERTO AQUI
    // firebase deploy --only functions
     baseURL: 'https://us-central1-clone-ecf29.cloudfunctions.net/api'
    // baseURL: 'http://localhost:5001/clone-ecf29/us-central1/api'  // API URL TESTE


});

export default instance;