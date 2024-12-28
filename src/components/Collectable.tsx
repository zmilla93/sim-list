import { Link } from "react-router";
import { Crystal } from "../data/crystals";
import { Collectable } from "../data/collectables";
import { getImage } from "../utility";

export type CollectableProps = {
    crystal?: Collectable;
}

export function CollectablePanel(props: CollectableProps) {
    return (<div className=" relative m-1 px-2 py-1 text-red-500 border rounded border-green-500 min-w-max">
        {props.crystal?.name}
        <div className=" text-xs">{props.crystal?.rarity}</div>
        {/* <input type="checkbox" className=" absolute bottom-0 right-0"></input> */}
        <div className="flex justify-center">
            <img src={getImage(props.crystal?.type + "/" + props.crystal?.name + ".webp")}></img>
        </div>
        <div className=" ">{props.crystal?.elements?.map(e => <div key={e} className=" text-xs"><Link to="/elements">{e}</Link></div>)}</div>
    </div>)

}