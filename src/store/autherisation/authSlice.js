import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authData  from "./authAction";

const userExist = JSON.parse(localStorage.getItem('user'))
const authSlice = createSlice({
    name : "auth",
    initialState : {
        user : userExist ? userExist : null,
        isLoading : false,
        isError : false,
        isSuccess : false,
        message : ""
    },
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(registerUser.pending , (state,action)=>{
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
            state.message = "" ;
        })
        .addCase(registerUser.fulfilled , (state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
            state.isError = false;
            state.message = "" ;
        })
        .addCase(registerUser.rejected , (state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(loginUser.pending , (state,action)=>{
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
            state.message = "" ;
        })
        .addCase(loginUser.fulfilled , (state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
            state.isError = false;
            state.message = "" ;
        })
        .addCase(loginUser.rejected , (state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(logoutUser.fulfilled , (state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = null;
            state.isError = false;
            state.message = "";
        })
    }

})

export default authSlice.reducer;

//Register user

export const registerUser = createAsyncThunk("AUTH/REGISTER", async(formData,thunkAPI)=>{
    try {
        return await authData.register(formData)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

//Login user

export const loginUser = createAsyncThunk("AUTH/LOGIN", async(formData,thunkAPI)=>{
    try {
        return await authData.login(formData)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

//Logout user
export const logoutUser = createAsyncThunk("AUTH/LOGOUT", async()=>{
    localStorage.removeItem("user")
})