import { createSlice } from "@reduxjs/toolkit";
import itemsjson from '../../items.json'


export const productSlice = createSlice({
    name : 'products',
    initialState : {
        items: itemsjson.products,
        money: 100000000000,
        initialMoney: 100000000000,
    },
    reducers: {

    }
});


export default productSlice.reducer;