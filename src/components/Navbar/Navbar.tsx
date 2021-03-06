import React from "react";
import './Navbar.css';
import HamburgerDrawer from "./HamburgerDrawer";
import {CategoryEnum} from "../../utils/utils";

interface NavbarProps {
    setCategory: (val: CategoryEnum) => void;
}

export const Navbar = ({setCategory}: NavbarProps) => {
    return(
        <div className={"nav"}>
            <div className={"icon"}>
                <HamburgerDrawer setCategory={setCategory}/>
            </div>
            <img
                style={{cursor: 'pointer'}}
                src={'https://assets.inshorts.com/website_assets/images/logo_inshorts.png'}
                alt={"logo"}
                height={"80%"}
            />
        </div>
    )
}

export default Navbar;
