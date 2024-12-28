import { ReactNode } from "react";
import { Link, Outlet } from "react-router";
import { useTheme } from "../hooks/useTheme";
import '../css/theme.css'

export type PageWrapperProps = {
    children?: ReactNode;
}

export function PageWrapper() {
    const themeHook = useTheme();
    return (<div className="  flex flex-col items-center">
        <div className=" text-[--bg-color] text-7xl m-2">Sims 4 Collector</div>
        <input name="Theme" type="button" id = "themeSwitchButton" className=" text-7xl m-2" value={"WOWS"}/>
        <div className=" flex justify-center">
            <Link to="/">Home</Link>
            <Link to="/crystals">Crystals</Link>
            <Link to="/elements">Elements</Link>
            <Link to="/metals">Metals</Link>
        </div>
        <Outlet />
    </div>)

}