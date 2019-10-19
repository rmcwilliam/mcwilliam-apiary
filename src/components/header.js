import React from "react";
import { AST_PropAccess } from "terser";

export default props => (
    <h1 style={{ textAlign: "center", fontFamily: "candara", color: `teal` }}>
        {props.headerText}
    </h1>
);
//ns1.name.com ns2.name.com ns3.name.com ns4.name.com
