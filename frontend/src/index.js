import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
    palette: {
        primary: {
            main: "rgb(0, 165, 145)" // This is an orange looking color
        },
        // secondary: {
            // main: "#ffcc80" //Another orange-ish color
        // }
    },
    typography: {
        fontFamily: 'Quicksand',
        color: "white"
        }
});

root.render(
    <ThemeProvider theme = {theme}>
        <App />
    </ThemeProvider>
);


