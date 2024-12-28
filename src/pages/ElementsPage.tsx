import { CollectablePanel } from "../components/Collectable";
import { CollectableContainer } from "../components/CollectableContainer";
import { Collectable, CollectableElement } from "../data/collectables";
import { Crystal } from "../data/crystals";
import { getJsonArray } from "../utility";

export function ElementsPage() {
    const elements = getJsonArray<Collectable>("elements.json");
    console.log(elements.length);
    return (
        <div>
            <div className=" text-7xl m-2">Sims 4 Cheat Sheets</div>
            <CollectableContainer>
                {elements.map(c => <CollectablePanel key={c.name} crystal={c} />)}
            </CollectableContainer>
        </div>
    )
}