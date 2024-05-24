import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coinActions from "./coinAction";

const coinSlice = createSlice({
    name : "coins",
    initialState:{
        coins : [],
        coin: null,
        cart:[],
        isLoading : false,
        isError: false,
        isSuccess: false,

    },
    reducers:{
    },
    extraReducers : (builder)=>{
        builder
        .addCase(fetchCoins.pending, (state,action)=>{
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
        })
        .addCase(fetchCoins.fulfilled, (state,action)=>{
            state.isLoading= false;
            state.isError= false;
            state.isSuccess = true;
            state.coins = action.payload;
        })
        .addCase(fetchCoins.rejected, (state,action)=>{
            state.isLoading= false;
            state.isError= true;
            state.isSuccess = false;
        })
        .addCase(fetchCoinDetail.pending, (state,action)=>{
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
        })
        .addCase(fetchCoinDetail.fulfilled, (state,action)=>{
            state.isLoading= false;
            state.isError= false;
            state.isSuccess = true;
            state.coin = action.payload;
        })
        .addCase(fetchCoinDetail.rejected, (state,action)=>{
            state.isLoading= false;
            state.isError= true;
            state.isSuccess = false;
        })
    }
})
export default coinSlice.reducer

//fetch trending coins

export const fetchCoins = createAsyncThunk("FETCH/TRENDING",async()=>{
    try {
        return await coinActions.fetchTrendingCoins();
    } catch (error) {
        console.log(error)
    }
});

//fetch coin details

export const fetchCoinDetail = createAsyncThunk("FETCH/COIN",async(id)=>{
    try {
        return await coinActions.fetchCoin(id);
    } catch (error) {
        console.log(error);
    }
});