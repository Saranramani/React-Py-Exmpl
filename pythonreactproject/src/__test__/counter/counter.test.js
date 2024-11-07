import React from 'react';
import { render, fireEvent, screen, getByTestId } from '@testing-library/react';
import Counter from '../../counter/Counter';
import App from '../../App';
import { Provider } from 'react-redux';

const storeRender = () => {
        <React.StrictMode>
            <Provider>
                <App />
                <Counter />
            </Provider>
        </React.StrictMode>
}

describe(Counter, () => {

    test('should be equal to 0', () => {
        storeRender();
        const { getByTestId } = render(<Counter />);
        const value = Number(getByTestId('counter').textContent);
        expect(value).toEqual(0);
    });

    test('count should be increment by 1 if the button clicked', () => {
        storeRender();
        const { getByTestId, getByRole } = render(<Counter />);
        expect(Number(getByTestId('counter').textContent)).toEqual(0);
        fireEvent.click(getByRole('button', { name: 'INCREMENT' }));
        expect(Number(getByTestId('counter').textContent)).toEqual(1);
    });

    test('count should be decrement by 1 if the button clicked', () => {
        storeRender();
        const { getByTestId, getByRole } = render(<Counter />);
        expect(Number(getByTestId('counter').textContent)).toEqual(0);
        fireEvent.click(getByRole('button', { name: 'DECREMENT' }));
        expect(Number(getByTestId('counter').textContent)).toEqual(-1);
    });

    test('count should be 0 if the button clicked', () => {
        storeRender();
        const { getByTestId, getByRole } = render(<Counter />);
        expect(Number(getByTestId('counter').textContent)).toEqual(0);
        fireEvent.click(getByRole('button', { name: 'RESET' }));
        expect(Number(getByTestId('counter').textContent)).toEqual(0);
    });
});