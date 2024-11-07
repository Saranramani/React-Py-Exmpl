import React from "react";
import Redux from "../../redux/redux";
import { render, screen, fireEvent , getByTestId , getByRole } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";

const storeRender = () => {
    render(
        <React.StrictMode>
            <Provider store={store}>
                <Redux />
            </Provider>
        </React.StrictMode>
    )
}

describe("test the redux page", () => {
    test('render initial counter text', () => {
        storeRender();
        const div = screen.getByTestId("redux-div");
        expect(div).toBeTruthy();
        const value = Number(screen.getByTestId('counter-text').textContent);
        expect(value).toEqual(0);
    });

    test('button increment', ()=> {
        storeRender();
        const incValue = Number(screen.getByTestId('counter-text').textContent);
        expect(incValue).toEqual(0);
        fireEvent.click(screen.getByRole('button', { name: 'INCREMENT' }));
        const afterInc = Number(screen.getByTestId('counter-text').textContent);
        expect(afterInc).toEqual(3);
    });

    test('button decrement', ()=> {
        storeRender();
        const decValue = Number(screen.getByTestId('counter-text').textContent);
        expect(decValue).toEqual(3);
        fireEvent.click(screen.getByRole('button', { name: 'DECREMENT' }));
        const afterDec = Number(screen.getByTestId('counter-text').textContent);
        expect(afterDec).toEqual(0);
    });

    test('button reset', ()=> {
        storeRender();
        const resetValue = Number(screen.getByTestId('counter-text').textContent);
        expect(resetValue).toEqual(0);
        fireEvent.click(screen.getByRole('button', { name: 'RESET' }));
        const afterReset = Number(screen.getByTestId('counter-text').textContent);
        expect(afterReset).toEqual(0);
    });
});