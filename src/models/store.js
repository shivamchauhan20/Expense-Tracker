import {createStore} from 'redux';
import { expenseRed } from './reducers/expensereducer';
export const store = createStore(expenseRed);
store.subscribe(()=>{
console.log('Subscribe..... ',store.getState());
});