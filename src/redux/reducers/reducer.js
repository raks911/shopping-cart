const INIT_STATE = {
    carts : [] ,
}

export const cartreducer = ( state =INIT_STATE,action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return{
                ...state,
                carts:[
                    ...state.carts,action.payload
                ]
            }
        case "RMV_FRM_CART":
            const data=state.carts.filter((e) => 
                e.id !== action.payload
            )
            return{
                ...state,
                carts:data

            }
        default:
            return state;
    }
}