import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
// import { useTheme } from "../useTheme";
// import { Svg } from "../util";
// const sunIcon = require("../icons/sun.svg");
// const themeIcon = require("../icons/theme.svg");
// const githubIcon = require("../icons/github.svg");
// const linkedInIcon = require("../icons/linkedin.svg");

export function NavBar() {
    const location = useLocation();
    const [selectedButton, setSelectedButton] = useState("null");
    const [targetRect, setTargetRect] = useState<MutableRefObject<any> | null>(null);
    const underlineSize = 6;
    // const toggleTheme = useTheme();
    if (selectedButton != location.pathname) setSelectedButton(location.pathname);
    // FIXME : Could use a nice way to keep svg & button paddings/margins the same if they are ever changes.
    return (
        // NOTE : pb-size should be changed here if underlineSize is ever changed
        <div id="navbar" className={" bg-red-400 pb-[3px] relative flex justify-between items-stretch border-b-0 border-[var(--main-color)] text-xl "}>
            <ButtonGroup>
                <NavButton to="/" text="Home" setTargetRect={setTargetRect} />
                <NavButton to="crystals" text="Crystals" setTargetRect={setTargetRect} />
                <NavButton to="elements" text="Elements" setTargetRect={setTargetRect} />
                <NavButton to="metals" text="Metals" setTargetRect={setTargetRect} />
                {/* <Svg src={themeIcon} className={"mx-2"} size="1.2em" onClick={toggleTheme} /> */}
                <CurrentPageUnderline targetRect={targetRect} height={underlineSize} />
                {/* <CurrentPageUnderlineBuffer height={underlineSize} /> */}
            </ButtonGroup>
            {/* <ButtonGroup >
                <Link to="https://github.com/zmilla93" target="_blank"><Svg src={githubIcon} className={"mx-3"} /></Link>
                <Link to="https://www.linkedin.com/in/zachmiller3" target="_blank"><Svg src={linkedInIcon} className={"mx-3"} /></Link>
            </ButtonGroup> */}
        </div>
    );
}

function ButtonGroup({ children }: { children: React.ReactNode }) {
    return (
        <span className="flex items-center mx-10">
            {children}
        </span>
    );
}

function NavButton({ to, text, setTargetRect = null }: { to: string, text: string, setTargetRect: ((e: MutableRefObject<any>) => void) | null }) {
    const ref = useRef(null);
    const location = useLocation();
    // FIXME : Move calculation up one level. Reduces work and should avoid an initial render using null value
    useEffect(() => {
        if (setTargetRect == null) return;
        if (to == "/") {
            if (location.pathname == "/") setTargetRect(ref);
            return;
        }
        if (location.pathname.includes(to)) {
            setTargetRect(ref);
        }
    });
    return <Link ref={ref} className={" border border-red-600 px-3 py-1 inline-block text-[--main-color] hover:text-[--main-color-light] duration-200"} to={to}>{text}</Link>;
}

function CurrentPageUnderline({ targetRect, height }: { targetRect: MutableRefObject<any> | null, height: number }) {
    const [loaded, setLoaded] = useState(false);
    let bounds;
    let loadCheck = false;
    let offsetX = 0;
    if (targetRect == undefined) {
        bounds = { x: 0, y: 0, width: 0, height: 0 };
    } else {
        bounds = targetRect.current.getBoundingClientRect();
        console.log(bounds);
        const parentBounds = targetRect.current.parentElement.getBoundingClientRect();
        const xOffset = bounds.x - parentBounds.x;
        console.log(xOffset);
        console.log(targetRect.current.x);
        offsetX = xOffset;
        loadCheck = true;
    }
    useEffect(() => { setLoaded(loadCheck); }, [loadCheck]);
    const duration = loaded ? "duration-500" : "";
    return (
        <div className={"absolute bg-[--main-color] " + duration} style={{ left: offsetX, bottom: 0, width: bounds.width, height: height }} />
    );
}

function CurrentPageUnderlineBuffer({ height }: { height: number }) {
    return <div className="block" style={{ width: 20, height: height }}></div>;
}