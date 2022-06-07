import { shallowEqual } from 'react-redux';
import {createStore} from 'redux';

const initialeState = {
    items : 2,
    price1 : 17.99,
    price2 : 35.99,
    barang1 : 1,
    barang2 : 1,
    amount : 0,
    total : 0,
    
}

const reducer =(state = initialeState,action ) => {
    console.log('Running',action );
    switch(action.type){
        case 'addBarang1' :
            return Object.assign({},state,{barang1 : state.barang1 +1})
            default :
            return state
        case 'subBarang1' :
            if (state.barang1 === 0 ){
                return state
            }else{
            return Object.assign({},state,{barang1 : state.barang1 - 1})
            }
        case 'addBarang2' :
            return Object.assign({},state,{barang2 : state.barang2 + 1})
           
        case 'subBarang2' :
            if (state.barang2 === 0 ){
                return state
                }else{
                return Object.assign({},state,{barang2 : state.barang2 - 1})
                }
        case 'diskon20' :
            return Object.assign({},state,{value : state.value + 2})
        case 'price0' :
            return Object.assign({},state,{price1 : state.price1 *0})
        case 'price02' :
            return Object.assign({},state,{price2 : state.price2 *0})
        case 'subValue' :
            return Object.assign({},state,{items : state.items -1})
        }    
        
}



const store = createStore(reducer);

export default (store);