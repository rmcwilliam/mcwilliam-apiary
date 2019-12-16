import React from "react";
import Header from "../components/header";
import Link from "../components/link";

export default () => (
    <div>
        <Header headerText="McWilliam Apiary" />
        <Link path="/" text="Home" />
        <p>
            <Link path="/contact/" text="Contact" />
        </p>
        <p style={{ fontSize: 18, color: `black` }}>
            I attempt to keep bees alive. Sometimes I get to harvest some of
            their extra honey.
        </p>
    </div>
);
