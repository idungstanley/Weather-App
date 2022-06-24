import {configureStore} from '@reduxjs/toolkit'
import ApiReducer from "./SearchApi";

const store = configureStore({
 reducer: {ApiReducer}
})

export default store;