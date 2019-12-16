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
    </div>
);
