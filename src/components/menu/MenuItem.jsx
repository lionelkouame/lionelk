import React from "react";

const MenuItem = ({children}) => {
    return (
        <>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1"
                   aria-disabled="true">Disabled</a>
            </li>
        </>
    );
}

export default MenuItem;