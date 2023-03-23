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

// export const addCart = (thisProduct) => {
//     return  {
//         type: "ADDITEM",
//         payload : thisProduct
//     }
    
// }
// export const delCart = (thisProduct) => {
//     return {
//         type: "DELITEM",
//         payload : thisProduct
//     }
   
// }