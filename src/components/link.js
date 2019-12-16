import React from "react";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export default props => <StyledLink to={props.path}>{props.text}</StyledLink>;
