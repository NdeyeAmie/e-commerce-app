
 const addItem = [];

 const addItems = (state = addItem, action) => {
      switch (action.type) {
         case "ADDITEM" : return[
             ...state,
             action.payload
         ]

        
          case "DELITEM" :
            return [...state.filter((x)=>{
                return x._id !== action.payload._id
            })]

            //    return state = state.filter((x)=>{
            //       return x.id !== action.payload.id
            //   })

             default: return state;
            
      }
 }
 export default addItems;


// const cart = [];

// const handleCart = (state = cart, action) => {
//          const thisProduct = action.payload;
//            switch (action.type) {
//               case "ADDITEM" :

//                 const exist = state.find((x) => x._id === thisProduct._id);
//                       if(exist) {
//                              return state.map((x) =>
//                              x._id === thisProduct._id ? { ...x, qty: x.qty +1} : x
//                              );
//                           }else{
//                             const thisProduct = action.payload;
//                             return [
//                                 ...state,
//                                 {
//                                     ...thisProduct,
//                                     qty: 1
//                                 }
//                             ]
//                           }
//                         //    break;
                           
//                            case "DELITEM":
//                             const exist1 = state.find((x) => x._id === thisProduct._id);
//                             if(exist1.qty === 1) {
//                                 return state.filter((x) => x._id !== exist1._id);
//                             }else {
//                                    return state.map((x) =>
//                                    x._id === thisProduct._id ? { ...x, qty: x.qty +1} : x
//                                    );
//                             }
//                             // break;

//                           default:
//                           return state;

//            }
//         }

//         export default handleCart;