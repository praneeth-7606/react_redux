import { actiontypes } from "../constants/actiontypes"
export const setproducts=(products)=>{
    return{
        type:actiontypes.SET_PRODUCTS,
        payload:products,


    };
}
export const selectedProduct = (product) => {
    return {
      type: actiontypes.SELECTED_PRODUCTS,
      payload: product,
    };
  };
  export const removeSelectedProduct = () => {
    return {
      type: actiontypes.REMOVE_SELECTED_PRODUCTS,
    };
  };

// export const REMOVE_SELECTED_PRODUCTS=()=>{
//     return{
//         type:actiontypes.REMOVE_SELECTED_PRODUCTS,
//         payload:products,
//     };
// };