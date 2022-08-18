import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {BrowserRouter} from "react-router-dom";

import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Provider} from "react-redux";
import {store} from "./redux/configureStore";

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#F5F5F5',
        },
        secondary: {
            main: '#A7A7A7',
        },
    },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                 <App />
            </Provider>
            </ThemeProvider>
    </BrowserRouter>
);

