import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,SiddeBtnWrap,SidebarSign
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>Coffee</SidebarLink>
        <SidebarLink to='/'>Hot Drinks</SidebarLink>
        <SidebarLink to='/'>Smoothies</SidebarLink>
        <SidebarLink to='/'>Full Menu</SidebarLink>
        

      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SideBtnWrap>
      <SiddeBtnWrap>
      <SidebarSign to='/'>sign in</SidebarSign>

      </SiddeBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;


