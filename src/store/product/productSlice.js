import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL, POSTFIX_PRODUCT } from "../../components/Catalog/CONST";

const initialState = {
    products:[],
    error:""
};

export const productRequestAsycn = createAsyncThunk (
    "product/fetch",(category) => 
    fetch(`${API_URL}${POSTFIX_PRODUCT}?category=${category}`)
    .then(req => req.json())
    .catch(error => {{error}})
)

const produtSlice = createSlice({
    name:"product",
    initialState,
    extraReducers:builder => {
        builder
            .addCase(productRequestAsycn.pending.type,state => {
                state.error = "";
            })
            .addCase(productRequestAsycn.fulfilled.type,(state,action) => {
                state.error = "";
                state.products = action.payload;
            })
            .addCase(productRequestAsycn.rejected.type,(state,action) => {
                state.error = action.payload.error;
            });
    }
});

export default produtSlice.reducer;