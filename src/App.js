import React from "react";
import Store from "./apis/Store";
import Card from "./components/Card";
import Home from "./components/Home";
import index from "./index.css";

import ErrorBoundary from "./Error Boundary/ErrorBoundary";
const App = () => {
    return (
        <ErrorBoundary>
        <Store>
            <Home />
            <Card/>
        </Store>
        </ErrorBoundary>
    );
};
export default App;