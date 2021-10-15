export const initialState = {
    carrinho: [],
    user: null,
};

export const getBasketTotal = (carrinho) => carrinho?.reduce((amount, item) => item.preco + amount, 0);

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_AO_CARRINHO':
            return {
                ...state,
                carrinho: [...state.carrinho, action.item]
            };

        
        case 'EMPTY_BASKET':
            return {
                ...state,
                carrinho: []
            }

        case 'REMOVER_DO_CARRINHO':
            let newCarrinho = [...state.carrinho];

            const index = state.carrinho.findIndex((carrinhoItem) => carrinhoItem.id === action.id);

            if (index >= 0){
                newCarrinho.splice(index, 1);
            }else{

            }

            return {...state, carrinho: newCarrinho};

        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }

        default:
            return state;
    }
}

export default reducer;