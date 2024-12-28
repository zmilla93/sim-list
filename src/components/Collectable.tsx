import { Link } from "react-router";
import { Collectable } from "../data/collectables";
import { getImage } from "../utility";
import { LinkHoverCallback } from "./CollectableContainer";

export type CollectableProps = {
    collectable: Collectable;
    highlightItem: string;
    linkHoverCallback: (hover: boolean, name: string) => void;
}

export function CollectablePanel(props: CollectableProps) {
    return (<div className=" relative m-1 px-2 py-1 text-red-500 border rounded border-green-500 min-w-max">
        {props.collectable?.name}
        <div className=" text-xs">{props.collectable?.rarity}</div>
        <div className="flex justify-center">
            <img src={getImage(props.collectable?.type + "/" + props.collectable?.name + ".webp")}></img>
        </div>
        <div className=" flex justify-center border-red-500">
            <LinkSection to="Elements" list={props.collectable?.elements} highlightItem={props.highlightItem} linkHoverCallback={props.linkHoverCallback} />
            <LinkSection to="Metals" list={props.collectable?.metals} highlightItem={props.highlightItem} linkHoverCallback={props.linkHoverCallback} />
            <LinkSection to="Crystals" list={props.collectable?.crystals} highlightItem={props.highlightItem} linkHoverCallback={props.linkHoverCallback} />
        </div>
    </div>)

}

function LinkSection({ to, list, highlightItem, linkHoverCallback }: { to: string, list: string[] | undefined, highlightItem: string, linkHoverCallback: LinkHoverCallback }) {
    if (!list || list.length == 0) return null;
    return (
        <div className=" mx-[2px] p-[2px] border border-gray-600">
            <div>{to}</div>
            {/* {list?.map(e => <div key={e} className=" text-xs"><Link to={"/" + to.toLocaleLowerCase()}>{e}</Link></div>)} */}
            {list?.map(e => <SingleLink key={e} text={e} to={to} highlightItem={highlightItem} linkHoverCallback={linkHoverCallback} />)}
        </div>)
}

function SingleLink({ text, to, highlightItem, linkHoverCallback }: { text: string, to: string, highlightItem: string, linkHoverCallback: LinkHoverCallback }) {
    let bgColor = highlightItem == text ? "bg-red-500" : "bg-green-500";
    return <div className={" text-xs " + bgColor} onMouseEnter={() => linkHoverCallback(true, text)} onMouseLeave={() => linkHoverCallback(false, text)}><Link to={"/" + to.toLocaleLowerCase()}>{text}</Link></div>;
}