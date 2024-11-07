import React from "react";
import Api from "../../Routers/api";
import { render, screen , fireEvent, getByTestId, getByRole, getByText, waitFor } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

storeRender = ()=>{
    render(
        <BrowserRouter>
            <Api />
        </BrowserRouter>
    )
}


const mockData = [
    {
        "id": 1,
        "title": "forest",
        "description": "Wild forest",
        "created": "2023-07-28T08:19:59.656614Z"
    },
    {
        "id": 2,
        "title": "showroom",
        "description": "Brand new cars",
        "created": "2023-08-08T08:20:20.937916Z"
    }
]

describe('test api page', () => { 
    test('test the text present or what', ()=>{
        storeRender();
        expect(screen.getByTestId('api').textContent).toEqual('Api testing..!');
    });

    test('btn present and check by clicking', ()=>{
        storeRender();
        expect(screen.getByTestId('btn-api').textContent).toBeTruthy();
        expect(screen.getByTestId('btn-api')).toHaveTextContent('Back');
        expect(screen.getByRole('link', { name:'Back'})).toHaveAttribute('href', '/');
    });

    // test('text got from api back-end', ()=>{
    //     render(
    //         <BrowserRouter>
    //             <Api data={ mockData } />  
    //         </BrowserRouter>
    //     )
    // storeRender()
    //     expect(screen.getByText(/showroom/i)).toBeInTheDocument();
    // });
});