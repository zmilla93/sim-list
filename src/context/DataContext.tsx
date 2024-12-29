import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Collectable } from "../data/collectables";
import { getJsonArray } from "../utility";

// This file provides a context for all datasets.

export type Datasets = {
    crystals: Collectable[];
    metals: Collectable[];
    elements: Collectable[];
}

// Datasets will never be null, just empty
export const EMPTY_DATASET: Datasets = { crystals: [], metals: [], elements: [] };

export const DataContext = createContext<Datasets>(EMPTY_DATASET);

export function useDatasets() {
    const context = useContext(DataContext);
    if (!context) throw new Error("useDatasets must be used within a DataProvider");
    return context;
}

// Context Provider
export function DataProvider({ children }: { children: ReactNode }) {
    const [data, setData] = useState<Datasets>(EMPTY_DATASET);
    // const [crystals, setCrystals] = useState<Collectable[] | null>(null);
    // const [metals, setMetals] = useState<Collectable[] | null>(null);
    // const [elements, setElements] = useState<Collectable[] | null>(null);
    useEffect(() => {
        console.log("Loading data");
        const crystals = getJsonArray<Collectable>("crystals.json");
        const metals = getJsonArray<Collectable>("metal.json");
        const elements = getJsonArray<Collectable>("elements.json");
        // setCrystals(getJsonArray<Collectable>("crystals.json"));
        // setMetals(getJsonArray<Collectable>("metals.json"));
        // setElements(getJsonArray<Collectable>("elements.json"));
        setData({ crystals, metals, elements });
    }, []);

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
}

