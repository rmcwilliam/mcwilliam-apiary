import React from "react";
import Header from "../components/header";
import { Link } from "gatsby";

export default () => (
    <div>
        <Header headerText="McWilliam Apiary" />
        <Link style={{ color: `black` }} to="/about/">
            About
        </Link>
        <p>
            <Link style={{ color: `black` }} to="/contact/">
                Contact
            </Link>
        </p>
        <p style={{ fontSize: 18, color: `black` }}>
            Bees are complex and fascinating creatures.
        </p>
    </div>
);
