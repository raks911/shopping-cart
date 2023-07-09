import { configureStore } from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import {cartreducer} from './redux/reducers/reducer'
const reducer = combineReducers({
    cartreducer
});

const store = configureStore({
    reducer,
})
export default store; 