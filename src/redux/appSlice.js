import { createSlice } from '@reduxjs/toolkit';

const language = localStorage.getItem('language');
const theme = localStorage.getItem('theme');

const initialState = {
    language: language ? JSON.parse(language) : { title: 'English', data: 'en' },
    theme: theme ? JSON.parse(theme) : { title: 'Dark', data: 'dark' },
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload
        },

        setTheme: (state, action) => {
            state.theme = action.payload
        },
    },
});

// Action creators are generated for each case reducer function
export const { setLanguage, setTheme } = appSlice.actions;

export default appSlice.reducer;
