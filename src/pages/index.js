import React from "react";
import { Link } from "gatsby";

export default () => (
    <div style={{ color: `purple` }}>
        <Link to="/about">
            About
        </Link>
        <h1>Hello Gatsby!</h1>
        <p>Wow that a fast startup. Did you see how quickly I got this deployed? See what else I did...</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
)