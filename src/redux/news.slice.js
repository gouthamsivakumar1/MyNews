import { createSlice } from '@reduxjs/toolkit';

const newsInitialState = { response: [],error:{} };

const newsSlice = createSlice({
    name: 'newsReducer',
    initialState: newsInitialState,
    reducers: {


        loadSuccess: (state, { payload }) => {
            return {
                ...state,
                response: payload,
                error: null
            };
        },

        loadFailed: (state, { payload }) => {
            return {
                ...state,
                response: null,
                error: null
            };
                   
        },
        extraReducers: {},
    }
});

export const {
    loadSuccess,
    loadFailed
} = newsSlice.actions;

export const newsReducer = newsSlice.reducer;

