import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Collectable } from "../data/collectables";
import { getJsonArray } from "../utility";
export type Datasets = {
    crystals: Collectable[] | null;
    metals: Collectable[] | null;
    elements: Collectable[] | null;
}

export const DataContext = createContext<Datasets | null>(null);

export function useDatasets() {
    const context = useContext(DataContext);
    if (!context) throw new Error("useDatasets must be used within a DataProvider");
    return context;
}

export function DataProvider({ children }: { children: ReactNode }) {
    const [data, setData] = useState<Datasets | null>(null);
    // const [crystals, setCrystals] = useState<Collectable[] | null>(null);
    // const [metals, setMetals] = useState<Collectable[] | null>(null);
    // const [elements, setElements] = useState<Collectable[] | null>(null);

    useEffect(() => {
        const crystals = getJsonArray<Collectable>("crystals.json");
        const metals = getJsonArray<Collectable>("metals.json");
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


    // return (
    //     <DataContext.Provider value= {} >
    //     { children }
    //     </DataContext.Provider>
    // )
}

