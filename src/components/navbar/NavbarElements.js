import styled from 'styled-components';
 import  { NavLink as Link} from 'react-router-dom';

import {FaCoffee} from 'react-icons/fa';

export const Nav = styled.nav `
Background : transparent;

 height: 79px;
 display: flex;
 justify-content: flex-start;
 font-weight: 550;
 ;`
 
 
   
 export const NavLink =styled(Link)`
 color: #fff;
 font-size: 2rem;
 display: flex;
 align-items: center;
 text-decoration: none;
cursor: pointer;

@media screen and  (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
    }`;
    export const NavIcon = styled.div`
    display: block;
    position : absolute;
    top: 0;
    right : 0;
    cursor: pointer;
    color: #fff;

    p {
        font-size: 1rem;
        transform: translate(-175%,100%);
font-weight: bold;
        
        }

    }
    `;

export const Bars = styled(FaCoffee)`
font-size: 3rem;
transform: translate(-50%,-15%);
`
;