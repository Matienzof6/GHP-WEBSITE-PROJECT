import { connect } from "react-redux"
import {Navbar, NavbarBrand, Link, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import GLogo from 'assets/img/G-GHP.svg'
import React, { useState }from "react";
import { PuffLoader } from 'react-spinners'

function NavigBar(){
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [loading]=useState(true)
    const menuItems = [
        {
            name: 'Servicios',
            description: 'Measure actions your users take',
            href: '/services',
            
          },
          {
            name: 'Quienes Somos',
            description: 'Create your own targeted content',
            href: '/about',
            
          },
          {
            name: 'Contacto',
            description: 'Keep track of your growth',
            href: '/contact',
            
          },
      
    ];
    return(
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
                />
                <NavbarBrand>
                    <NavbarItem>
                    <Link href="/" className="font-bold text-inherit">
                        <img src={GLogo} width={30} height={30} alt="GLogo" className="mx-2"/>   
                        GHP Servicios Integrales
                    </Link>
                    </NavbarItem>
                    
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                <NavbarItem isActive>
                <Link color="foreground" href="/services">
                    Servicios
                </Link>
                </NavbarItem>
                <NavbarItem isActive>
                <Link href="/about" aria-current="page">
                    Quienes Somos
                </Link>
                </NavbarItem>
                <NavbarItem isActive>
                <Link color="foreground" href="/contact">
                    Contacto
                </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                    color={
                        index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                    }
                    className="w-full"
                    href={item.href}
                    size="lg"
                    >
                    {item.name}
                    </Link>
                </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}


const mapStateToProps = state =>({

})

export default connect(mapStateToProps,{

}) (NavigBar)