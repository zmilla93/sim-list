import { CollectablePanel } from "../components/Collectable";
import { CollectableContainer } from "../components/CollectableContainer";
import { Collectable } from "../data/collectables";
import { getJsonArray } from "../utility";

export function ElementsPage() {
    const elements = getJsonArray<Collectable>("elements.json");
    return (
        <CollectableContainer>
            {elements.map(e => <CollectablePanel key={e.name} crystal={e} />)}
        </CollectableContainer>
    )
}