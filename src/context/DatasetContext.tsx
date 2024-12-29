import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Collectable } from "../data/collectables";
import { getJsonArray } from "../utility";

// FIXME : Hook and provider being in the same file could cause issues with HRM,
// but currently causes no issues and is much more maintainable for now.

// Datasets are provided as a single object
export type Dataset = {
    crystals: Collectable[];
    metals: Collectable[];
    elements: Collectable[];
    fossils: Collectable[];
}

// Datasets will never be null, just empty
export const EMPTY_DATASET: Dataset = { crystals: [], metals: [], elements: [], fossils: [] };
export const DatasetContext = createContext<Dataset>(EMPTY_DATASET);

// Hook to access the datasets
export function useDatasets() {
    const context = useContext(DatasetContext);
    if (!context) throw new Error("useDatasets must be used within a DataProvider");
    return context;
}

// Context Provider
export function DatasetProvider({ children }: { children: ReactNode }) {
    const [data, setData] = useState<Dataset>(EMPTY_DATASET);
    // const [crystals, setCrystals] = useState<Collectable[] | null>(null);
    // const [metals, setMetals] = useState<Collectable[] | null>(null);
    // const [elements, setElements] = useState<Collectable[] | null>(null);
    useEffect(() => {
        console.log("Loading data");
        const crystals = getJsonArray<Collectable>("crystals.json");
        const metals = getJsonArray<Collectable>("metal.json");
        const elements = getJsonArray<Collectable>("elements.json");
        const fossils = getJsonArray<Collectable>("fossil.json");
        // setCrystals(getJsonArray<Collectable>("crystals.json"));
        // setMetals(getJsonArray<Collectable>("metals.json"));
        // setElements(getJsonArray<Collectable>("elements.json"));
        setData({ crystals, metals, elements, fossils });
    }, []);

    return (
        <DatasetContext.Provider value={data}>
            {children}
        </DatasetContext.Provider>
    );
}

