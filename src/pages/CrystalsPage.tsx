import { Collectable } from "../components/Collectable";
import { CollectableContainer } from "../components/CollectableContainer";
import { Crystal } from "../data/crystals";
import { getJsonArray } from "../utility";

export function CrystalsPage() {
    const crystals = getJsonArray<Crystal>("crystals.json");
    return (
        <div>
            <div className=" text-7xl m-2">Sims 4 Cheat Sheets</div>
            <CollectableContainer>
                {crystals.map(c => <Collectable crystal={c} />)}
            </CollectableContainer>
        </div>
    )
}