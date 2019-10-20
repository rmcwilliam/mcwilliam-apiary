import React from "react";
import Header from "../components/header";
import Link from "../components/link";

export default () => (
    <div>
        <Header headerText="McWilliam Apiary" />
        <Link path="/" text="Home" />
        <p>
            <Link path="/about/" text="About" />
        </p>
        <p style={{ fontSize: 18, color: `black` }}>
            Please reach out if you wou ld like to buy some honey or just want
            to open up a box of bees.
        </p>
    </div>
);
