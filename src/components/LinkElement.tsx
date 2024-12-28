import { Link } from "react-router";

export type LinkElementProps = {
    to: string;
    text: string;
}

export function LinkElement(props: LinkElementProps) {
    return <div>
        {/* <Link to={"/" + props.to}>props.text</Link> */}
    </div>
}