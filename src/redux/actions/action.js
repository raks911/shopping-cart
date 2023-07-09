export const ADD = (item) => {
    return{
        type:"ADD_TO_CART",
        payload:item
    }
}

export const DLT = (id) => {
    return{
        type:"RMV_FRM_CART",
        payload:id
    }
}