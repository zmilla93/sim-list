import { ReactNode, useState } from "react";
import { Collectable } from "../data/collectables";
import { CollectablePanel } from "./Collectable";

export type CollectableContainerProps = {
    children?: ReactNode;
    collectables: Array<Collectable>;
}

export type LinkHoverCallback = (hover: boolean, name: string) => void

export function CollectableContainer(props: CollectableContainerProps) {

    const [highlightItem, setHighlightItem] = useState("");

    function linkHoverCallback(hover: boolean, name: string) {
        if (hover) setHighlightItem(name);
        else setHighlightItem("");
    }

    return (
        <div className=" flex flex-wrap justify-center border border-red-600 p-1">
            {props.collectables.map(c => <CollectablePanel key={c.name} collectable={c} highlightItem={highlightItem} linkHoverCallback={linkHoverCallback} />)}
        </div>
    );
}