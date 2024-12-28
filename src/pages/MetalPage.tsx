import { CollectableContainer } from "../components/CollectableContainer";
import { Collectable } from "../data/collectables";
import { getJsonArray } from "../utility";

export function MetalPage() {
    const metals = getJsonArray<Collectable>("metal.json");
    return (
        <CollectableContainer collectables={metals} />
    );
}