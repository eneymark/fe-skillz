import React from 'react';
import { Navbar, NavItem, NavDropdown, Nav } from 'react-bootstrap';

function HeaderNav({navBar}) {
        return (<Navbar data-test="navbar" variant="dark" bg="dark" expand="lg">
            <Navbar.Brand href="#home"><img data-test="logo" src="../we_are_wonderful.png"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    {navBar.navItems.map((navItem, index)=>{
                        if(navItem.subMenu){
                            return (<NavDropdown  data-test={`item:${navItem.title}`} key={navItem.title+index} title={navItem.title} id="basic-nav-dropdown">
                                {navItem.subMenu.map((subItem, index)=>{
                                    return (
                                        <NavDropdown.Item data-test="submenu" key={subItem.name+index} href={subItem.link}>{subItem.name}</NavDropdown.Item>)
                                })}
                            </NavDropdown>)


                        }
                        return (<Nav.Link data-test={`item:${navItem.title}`} key={navItem.title+index} title={navItem.title} href={navItem.link}>{navItem.name}</Nav.Link>)
                    })}

                </Nav>

            </Navbar.Collapse>
        </Navbar>)
    }

export default HeaderNav;