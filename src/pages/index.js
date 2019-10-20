import React from "react";
import Header from "../components/header";
import Link from "../components/link";

export default () => (
    <div>
        <Header headerText="McWilliam Apiary" />
        <Link path="/about/" text="About" />
        <p>
            <Link path="/contact/" text="Contact" />
        </p>
        <p style={{ fontSize: 18, color: `black` }}>
            Bees are complex and fascinating creatures.
        </p>
    </div>
);
