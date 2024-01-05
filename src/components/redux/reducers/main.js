import {combineReducers} from "redux"
import {productreducer,selectedProductsReducer} from './productreducer'
const reducers=combineReducers({
    allproducts: productreducer,
    product: selectedProductsReducer,


})
export default reducers;