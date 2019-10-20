import React from "react";
import { Link } from "gatsby";

export default props => (
    <Link to={props.path} style={{ color: `black` }}>
        {props.text}
    </Link>
);
