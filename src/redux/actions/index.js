export const addItem = (thisProduct) => {
    return  {
        type: "ADD_ITEM",
        payload : thisProduct
    }
    
}
export const delItem = (thisProduct) => {
    return {
        type: "DELITEM",
        payload : thisProduct
    }
   
}