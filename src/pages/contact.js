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
            <Link style={{ color: `black` }} to="/about/">
                About
            </Link>
        </p>
        <p style={{ fontSize: 18, color: `black` }}>
            Please reach out if you would like to buy some honey or just want to
            open up a box of bees.
        </p>
    </div>
);
