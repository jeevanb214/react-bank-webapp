import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="warning" light expand="md">
        <NavbarBrand href="/">My-Bank</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/jeevan-b-a39826158/" target='_blank'>Linkedin</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/jeevanb214/BankApplication" target='_blank'>
                GitHub-Backend-Used
              </NavLink>
            </NavItem>
          </Nav>
{/*           <NavbarText>Simple Text</NavbarText>
 */}        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
