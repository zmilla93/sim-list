import { Link } from "react-router";
import { usePreview } from "../context/PreviewContext";
import { Collectable } from "../data/collectables";
import { getImage } from "../utility";

export type CollectableProps = {
    collectable: Collectable;
}

export function CollectablePanel(props: CollectableProps) {
    // Note: Currently all images are 116x116. Future proofing for icons of different sizes.
    const minWidth = 116;
    const minHeight = 116;
    return (
        <div className=" relative m-1 px-2 py-1 text-red-500 border rounded border-green-500 min-w-max">
            {/* Title */}
            {props.collectable?.name}
            {/* Rarity */}
            <div className=" text-xs">{props.collectable?.rarity}</div>
            {/* Image */}
            <div className={"flex justify-center min-w-[" + minWidth + "] min-h-[" + minHeight + "px]"}>
                <img src={getImage(props.collectable?.type + "/" + props.collectable?.name + ".webp")}></img>
            </div>
            {/* Links to related items */}
            <div className=" flex justify-center border-red-500">
                <LinkSection to="Crystals" list={props.collectable?.crystals} />
                <LinkSection to="Metals" list={props.collectable?.metals} />
                <LinkSection to="Elements" list={props.collectable?.elements} />
            </div>
            {/* Pack Icon */}
            <PackIcon pack={props.collectable.expansion} />
            <div>

            </div>
        </div >
    );
}

function LinkSection({ to, list }: { to: string, list: string[] | undefined }) {
    if (!list || list.length == 0) return null;
    return (
        <div className=" mx-[2px] p-[2px] border border-gray-600">
            <div className=" text-sm">{to}</div>
            {list?.map(e => <SingleLink key={e} text={e} to={to} />)}
        </div>
    );
}

function SingleLink({ text, to }: { text: string, to: string }) {
    const preview = usePreview();
    const bgColor = text == preview.data ? "bg-green-300" : "";
    return <div className={" rounded transition-all duration-200 text-xs " + bgColor}
        // onMouseEnter={() => linkHoverCallback(true, text)}
        onMouseEnter={() => preview.setData(text)}
        // onMouseLeave={() => linkHoverCallback(false, text)}
        onMouseLeave={() => preview.setData(null)}
    >
        <Link className="w-full block" to={"/" + to.toLocaleLowerCase()}>{text}</Link>
    </div>;
}

function PackIcon({ pack }: { pack: string | undefined }) {
    if (pack == undefined) return null;
    return <img title={pack} className=" absolute right-[2px] bottom-[2px] max-h-6" src={getImage("icons/" + pack + ".webp")}></img>;
}
