import { Crystal } from "../data/crystals";
import { getImage } from "../utility";

export type CollectableProps = {
    crystal?: Crystal;
}

export function Collectable(props: CollectableProps) {
    return (<div className=" relative m-1 px-2 py-1 text-red-500 border rounded border-green-500 min-w-max">
        {props.crystal?.name}
        <div className=" text-xs">{props.crystal?.rarity}</div>
        {/* <input type="checkbox" className=" absolute bottom-0 right-0"></input> */}
        <div className="flex justify-center">
            <img src={getImage("crystals/" + props.crystal?.name + ".webp")}></img>
        </div>
        <div className=" ">{props.crystal?.elements.map(e => <div className=" text-xs">{e}</div>)}</div>
    </div>)

}