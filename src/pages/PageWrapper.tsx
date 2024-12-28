import { ReactNode } from "react";
import { Link, Outlet } from "react-router";

export type PageWrapperProps = {
    children?: ReactNode;
}

export function PageWrapper() {
    return (<div className=" flex flex-col items-center">
        <div className=" text-7xl m-2">Sims 4 Collector</div>
        <div className=" flex justify-center">
            <Link to="/">Home</Link>
            <Link to="/crystals">Crystals</Link>
            <Link to="/elements">Elements</Link>
        </div>
        <Outlet />
    </div>)

}