import React from "react";
import { render, screen } from '@testing-library/react';
import App from "../App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";


const storeRender = () => {
    render(
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    )
}

test('test the app component', () => {
    storeRender();
    expect(screen.getByTestId('app-div')).toBeTruthy();
})