import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import MyForm from '../../routers/Form';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from "react-router-dom";


const storeRender = () => {
    render(
        <BrowserRouter>
            <MyForm />
        </BrowserRouter>
    );
};

describe('testing the form', () => {

    test('testing button and have text or not', ()=> {
        storeRender();
        expect(screen.getByTestId('btn')).toBeTruthy();
        expect(screen.getByRole('button', { name: 'Go Back' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Go Back' })).toHaveAttribute('href', '/');
    });

    test('test firstname input field', () => {
        storeRender();
        // for single input box
        // const inputElement = screen.getByRole('textbox');
        // for multiple input box use testid match
        const inputEl = screen.getByTestId('fname-input');
        const nameInput = screen.getByPlaceholderText(/^Enter Your Firstname$/);
        const fnameLabel = screen.getByLabelText(/Enter Firstname*/i);
        fireEvent.change(screen.getByTestId('fname-input'), { target: { value: 'saran' } });
        fireEvent.click(screen.getByTestId('submit-btn'));
        expect(screen.getByTestId('wrapdiv')).toBeTruthy();
        expect(inputEl).toBeInTheDocument();
        expect(nameInput).toBeInTheDocument();
        expect(fnameLabel).toBeInTheDocument();
    });

    test('test lastname input field', () => {
        storeRender();
        const inputEl = screen.getByTestId('lname-input');
        const nameInput = screen.getByPlaceholderText(/^Enter Your Lastname$/);
        const lnamelabel = screen.getByLabelText(/Enter Lastname*/i);
        fireEvent.change(screen.getByTestId('lname-input'), { target: { value: 'prabhakaran' } });
        fireEvent.click(screen.getByTestId('submit-btn'));
        expect(inputEl).toBeInTheDocument();
        expect(nameInput).toBeInTheDocument();
        expect(lnamelabel).toBeInTheDocument();
    });

    test('test email input field', () => {
        storeRender();
        const inputEl = screen.getByTestId('email-input');
        const nameInput = screen.getByPlaceholderText(/^Enter Your Email$/);
        const emailLabel = screen.getByLabelText(/Enter E-mail*/);
        fireEvent.change(screen.getByTestId('email-input'), { target: {value: 'saran@gmail.com'} });
        fireEvent.click(screen.getByTestId('submit-btn'));
        expect(inputEl).toBeInTheDocument();
        expect(nameInput).toBeInTheDocument();
        expect(emailLabel).toBeInTheDocument();
    });

    test('test mobile number input field', () => {
        storeRender();
        const inputEl = screen.getByTestId('mobnum-input');
        const nameInput = screen.getByPlaceholderText(/^Enter Your Mobile Number$/);
        const lnamelabel = screen.getByLabelText(/Enter Mobile Number*/i);
        fireEvent.change(screen.getByTestId('mobnum-input'), { target: { value: '9344291466' } });
        fireEvent.click(screen.getByTestId('submit-btn'));
        expect(inputEl).toBeInTheDocument();
        expect(nameInput).toBeInTheDocument();
        expect(lnamelabel).toBeInTheDocument();
    });

    test('test alternate mobile number input field', () => {
        storeRender();
        const inputEl = screen.getByTestId('altMobNum-input');
        const nameInput = screen.getByPlaceholderText(/^Alternate Mobile Number$/);
        const lnamelabel = screen.getByLabelText(/Alternate Mobile/i);
        fireEvent.change(screen.getByTestId('altMobNum-input'), { target: { value: '9988608022' } });
        fireEvent.click(screen.getByTestId('submit-btn'));
        expect(inputEl).toBeInTheDocument();
        expect(nameInput).toBeInTheDocument();
        expect(lnamelabel).toBeInTheDocument();
    });

    test('test password input field', () => {
        storeRender();
        const inputEl = screen.getByTestId('password-input');
        const nameInput = screen.getByPlaceholderText(/^Enter Password$/);
        const passLabel = screen.getByLabelText(/Enter Password*/);
        fireEvent.change(screen.getByTestId('password-input'), { target: {value: 'saran123'} });
        fireEvent.click(screen.getByTestId('submit-btn'));
        expect(inputEl).toBeInTheDocument();
        expect(nameInput).toBeInTheDocument();
        expect(passLabel).toBeInTheDocument();
    });

    test('test confirm password input field', () => {
        storeRender();
        const inputEl = screen.getByTestId('cpass-input');
        const nameInput = screen.getByPlaceholderText(/^Enter confirm password$/);
        const passLabel = screen.getByLabelText(/Confirm Password*/);
        fireEvent.change(screen.getByTestId('cpass-input'), { target: {value: 'saran123'} });
        fireEvent.click(screen.getByTestId('submit-btn'));
        expect(inputEl).toBeInTheDocument();
        expect(nameInput).toBeInTheDocument();
        expect(passLabel).toBeInTheDocument();
    });

    test('test the submit button', () => {
        const handleSubmit = jest.fn();
        render(
            <BrowserRouter>
                <MyForm onSubmit={handleSubmit} />
            </BrowserRouter>
        );
        // for test id
        // const submitBtn = screen.getByTestId('submit-btn');
        // for button
        const submitButton = screen.getByRole('button', { name: /^submit$/ });
        expect(submitButton).toBeInTheDocument();
        fireEvent.submit(screen.getByText(/submit/i));
        // expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
});