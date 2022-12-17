import React from "react";
import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white">
            <span className="font-bold">User demo</span>

            <span>
                <Link to="/" className="mr-2">Users</Link>
                <Link to="/about">About</Link>
            </span>
        </nav>
    )
}