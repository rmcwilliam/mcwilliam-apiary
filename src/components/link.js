import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

export default props => <StyledLink to={props.path}>{props.text}</StyledLink>;
