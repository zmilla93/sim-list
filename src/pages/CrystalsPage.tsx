import { CollectablePanel } from "../components/Collectable";
import { CollectableContainer } from "../components/CollectableContainer";
import { Collectable } from "../data/collectables";
import { Crystal } from "../data/crystals";
import { getJsonArray } from "../utility";

export function CrystalsPage() {
    const crystals = getJsonArray<Collectable>("crystals.json");
    return (
        <div>
            <div className=" text-7xl m-2">Sims 4 Cheat Sheets</div>
            <CollectableContainer>
                {crystals.map(c => <CollectablePanel key={c.name} crystal={c} />)}
            </CollectableContainer>
        </div>
    )
}