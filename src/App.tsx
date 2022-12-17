import React from 'react';
import {Route, Routes} from "react-router-dom";
import {UsersPage} from "./pages/UsersPage";
import {AboutPage} from "./pages/AboutPage";
import {Navigation} from "./components/Navigation";

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<UsersPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
        </>

    )
}

export default App;
