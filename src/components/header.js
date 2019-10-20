import React from "react";
import styled from "styled-components";

const Header = styled.h1`
    color: teal;
    fontfamily: candara;
`;

export default props => (
    <Header>
        <h1>{props.headerText}</h1>
    </Header>
);
