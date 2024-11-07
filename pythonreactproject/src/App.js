import React from "react";
import Counter from "./counter/Counter";
import Redux from "./redux/Redux";
import RouterApp from "./routers/Router";


const App = ()=> {
    return (
        <div data-testid="app-div">
            <Redux/>
            <RouterApp /> 
            <Counter/>
        </div>
    );
};
export default App; 