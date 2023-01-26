export const addItem = (thisProduct) => {
    return  {
        type: "ADDITEM",
        payload : thisProduct
    }
    
}
export const delItem = (thisProduct) => {
    return {
        type: "DELITEM",
        payload : thisProduct
    }
   
}