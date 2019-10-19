import React from "react";
import { AST_PropAccess } from "terser";

export default props => (
    <h1 style={{ textAlign: "center", fontFamily: "candara", color: `teal` }}>
        {props.headerText}
    </h1>
);
