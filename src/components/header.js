import React from 'react';
import styled from 'styled-components';
import '../../styles/global.css';
// import WebFont from 'webfontloader';

// WebFont.load({
//     google: {
//         families: ['Girassol']
//     }
// });

const Header = styled.header`
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: calc(10px + 2vmin);
    color: white;
    font-family: Girassol;
`;

export default props => (
    <Header>
        <h1>{props.headerText}</h1>
    </Header>
);
