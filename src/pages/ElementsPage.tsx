import { CollectableContainer } from "../components/CollectableContainer";
import { Collectable } from "../data/collectables";
import { getJsonArray } from "../utility";

export function ElementsPage() {
    const elements = getJsonArray<Collectable>("elements.json");
    return (
        <CollectableContainer collectables={elements} />
    );
}