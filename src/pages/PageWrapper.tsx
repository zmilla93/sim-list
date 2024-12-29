import { ReactNode } from "react";
import { Link, Outlet } from "react-router";
import '../css/theme.css';
import { useTheme } from "../hooks/useTheme";

export type PageWrapperProps = {
    children?: ReactNode;
}

export function PageWrapper() {
    useTheme();
    return (
        <div id="page" className="  ">
            {/* Top Bar */}
            <div id="topbar" className=" flex ">
                <div className=" text-7xl m-2">Sims 4 Depot</div>
                <input name="Theme" type="button" id="themeSwitchButton" className=" text-lg m-2" value={"Toggle Dark Mode"} />
                {/* Navbar */}
                <div className=" flex justify-center">
                    <Link to="/">Home</Link>
                    <Link to="/crystals">Crystals</Link>
                    <Link to="/elements">Elements</Link>
                    <Link to="/metals">Metals</Link>
                    <Link to="/credits">Credits</Link>
                </div>
            </div>
            {/* Page Content */}
            <div id="pageContent">
                <Outlet />
            </div>
        </div>
    );

}