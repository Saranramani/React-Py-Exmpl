import React from "react";
import Blogs from "../../routers/Blogs";
import { render, screen , fireEvent } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';



const storeRender = ()=> {
    render(<BrowserRouter><Blogs /></BrowserRouter>);
}

describe('Check blog page content' , ()=> {
    test('testing blog page content present', () => {
        storeRender();
        expect(screen.getByTestId('blogs')).toBeTruthy();
        expect(screen.getByTestId('blogs')).toHaveTextContent('Blog Page');
    });

    test('testing button have text or not', ()=> {
        storeRender();
        expect(screen.getByTestId('btn')).toBeTruthy();
        expect(screen.getByRole('button', { name: 'Back' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Back' })).toHaveAttribute('href', '/');
    });
});