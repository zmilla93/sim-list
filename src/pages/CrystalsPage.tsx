import { CollectableContainer } from "../components/CollectableContainer";
import { Collectable } from "../data/collectables";
import { getJsonArray } from "../utility";

export function CrystalsPage() {
    const crystals = getJsonArray<Collectable>("crystals.json");
    return (
        <CollectableContainer collectables={crystals} />
    )
}