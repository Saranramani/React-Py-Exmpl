import React from "react";
import Home from "../../Routers/Home";
import { render, screen , fireEvent } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';



const storeRender = ()=> {
    render(<BrowserRouter><Home /></BrowserRouter>);
}

describe('Checks the home page' , ()=> {
    test('testing home page content present', () => {
        storeRender();
        expect(screen.getByTestId('home')).toBeTruthy();
        expect(screen.getByTestId('home-page')).toHaveTextContent('Home Page');
    });

    test('testing the button have text or not and link', ()=> {
        storeRender();
        expect(screen.getByTestId('btn-api')).toBeTruthy();
        // fireEvent.click(getByRole('button', { name: 'Go to api' }));
        expect(screen.getByRole('link', { name: 'Go to Api' })).toHaveAttribute('href', '/api');
    });
    
    test('testing the button have text or not and link', ()=> {
        storeRender();
        expect(screen.getByTestId('btn-form')).toBeTruthy();
        expect(screen.getByRole('link', { name: 'Go to Form' })).toHaveAttribute('href', '/form');
    });
    
    test('testing the button have text or not and link', ()=> {
        storeRender();
        expect(screen.getByTestId('btn-blog')).toBeTruthy();
        expect(screen.getByRole('link', { name: 'Go to Blog' })).toHaveAttribute('href', '/blogs');
    });
});