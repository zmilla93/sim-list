import { ReactNode } from "react";
import { Link, Outlet } from "react-router";
import { NavBar } from "../components/Navbar";
import '../css/theme.css';
import { useTheme } from "../hooks/useTheme";

export type PageWrapperProps = {
    children?: ReactNode;
}

export function PageWrapper() {
    useTheme();
    return (
        <div id="page" className="">
            {/* Top Bar */}
            <div id="topbar" className=" relative m-2 flex items-center">
                <div className="text-2xl mr-3">Sims 4 Depot</div>
                <NavBar />
                {/* <div className="text-2xl">&nbsp;|&nbsp;</div> */}
                {/* Navbar */}
                <div className="flex justify-center">
                    <Link to="/">Home</Link>
                    <Link to="/crystals">Crystals</Link>
                    <Link to="/elements">Elements</Link>
                    <Link to="/metals">Metals</Link>
                    <Link to="/credits">Credits</Link>
                </div>
                <div id="themeSwitchButton" className=" cursor-pointer" >Toggle Dark Mode</div>
            </div>
            {/* Page Content */}
            <div id="pageContent">
                <Outlet />
            </div>
        </div>
    );

}