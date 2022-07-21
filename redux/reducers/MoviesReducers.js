
const INITAL_STATE = {
    movies:[],
}

export const MovieReducer = (state= INITAL_STATE ,action) => {
    switch (action.type) {
        case "SET_PRODUCT":
            return{
                ...state, 
                products:[...state.products, ...action.payload]
            }
        default:
            return state
    }}