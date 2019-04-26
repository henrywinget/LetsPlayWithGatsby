import React from "react";
import { Link } from "gatsby";
import Header from '../components/header';

export default () => (
    <div style={{ color: 'teal' }}>
        <Link to="/contact/">Contact</Link>
        <Header headerText="I'm a header bish!" />
        <p>This is an about page. Nothing to see here.</p>
    </div>
)