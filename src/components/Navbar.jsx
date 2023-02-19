import React from "react";
import { navigationLinks } from "../util/constants";
import { style } from "../util/style";

function Navbar() {
    return <div className="w-full flex py-6 justify-between items-center " >
        {/* LOGO */}
        <div className={`${style.heading}`}>MO</div>

        {/* NAvigation */}
        <ul className="list-none sm:flex hidden">
            {navigationLinks.map((nav, idx) => (
                <li>{nav.title}</li>
            ))}
        </ul>
        <p>Muzaffar</p>
    </div>;
}

export default Navbar;
