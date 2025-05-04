import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading : false,
}

const loaderSlice = createSlice({
    name : 'loader',
    initialState : initialState,
    reducers : {
        showLoader : (state) => {
            state.isLoading = true
        },
        hideLoader : (state) => {
            state.isLoading = falsep
        }
    }
});

export const {showLoader, hideLoader} = loaderSlice.actions;
export default loaderSlice.reducer;
