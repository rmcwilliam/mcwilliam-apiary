import React from "react";
import Header from "../components/header";
import { Link } from "gatsby";

export default () => (
    <div>
        <Header headerText="McWilliam Apiary" />
        <Link style={{ color: `black` }} to="/">
            Home
        </Link>
        <p>
            <Link style={{ color: `black` }} to="/contact/">
                Contact
            </Link>
        </p>
        <p style={{ fontSize: 18, color: `black` }}>
            I attempt to keep bees alive. Sometimes I get to harvest some of
            their extra honey
        </p>
    </div>
);
