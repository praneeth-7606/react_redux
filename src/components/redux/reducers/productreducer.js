import { actiontypes } from "../constants/actiontypes";


const initialstate={
    products:[],

};
export const productreducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case actiontypes.SET_PRODUCTS:
            return {...state,products:payload};
        default:
            return state



    }

};
export const selectedProductsReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case actiontypes.SELECTED_PRODUCTS:
        return { ...state, ...payload };
      case actiontypes.REMOVE_SELECTED_PRODUCTS:
        return {};
      default:
        return state;
    }
  };




// export default  productreducer