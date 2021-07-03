import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa';



export const SidebarContainer = styled.aside`
position: fixed;

z-index: 999;
width: 300px;
height: 100%;
background:#CD853F;
display: grid;
align-items: center;
top: 0;
transition : 0.2s ease-in-out;

right: ${({isOpen})=>(isOpen ? '0': '-1000px')};

@media screen and (max-width:400px){
    width:100%;

}
`;
export const CloseIcon = styled(FaArrowRight)`
color: #000;
`;

export  const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
border: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

export const SidebarMenu = styled.div `
display: grid;
grid-template-columns: 2fr;
grid-template-rows: repeat(4, 80px);
text-align: center;
 
@media screen and (max-width:480px) {
    grid-template-rows: repeat (4,60px);

}
`;
export const SidebarLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: #000;
cursor: pointer;

&:hover {
    color: #fff;
    transition: 0.2s ease-in-out;

}
`;

export const SiddeBtnWrap = styled.div`
display:flex;
justify-content: center;
`;
 export const SidebarRoute = styled(Link)`
 background: #993300;
 white-space : nowrap;
 padding: 16px 64px;
 color: #fff;
 font-size: 16px;
 outline: none;
 bouder: none;
 cursor: pointer;
 transition: 0.2s ease-in-out;
 text-decoration: none;
 margin-top: 90px;

 &:hover {
     transition: 0.2 ease-in-out ;
     background: #fff;
     color: #010606;

 }
 `;
 export const SideBtnWrap = styled.div`
display:flex;
justify-content: center;
`;
 export const SidebarSign = styled(Link)`
 background: #993300;
 white-space : nowrap;
 padding: 16px 64px;
 color: #fff;
 font-size: 16px;
 outline: none;
 bouder: none;
 cursor: pointer;
 transition: 0.2s ease-in-out;
 text-decoration: none;


 &:hover {
     transition: 0.2 ease-in-out ;
     background: #fff;
     color: #010606;

 }
 `;
 
 
 



