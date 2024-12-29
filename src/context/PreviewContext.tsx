import { createContext, useContext, useState } from "react";

export type PreviewContextType = {
    data: string | null;
    setData: (data: string | null) => void;
}

export const PreviewContext = createContext<PreviewContextType>({ data: null, setData: () => { } });

export function usePreview() {
    const context = useContext(PreviewContext);
    return context;
}

export function PreviewProvider({ children }: { children: React.ReactNode }) {
    const [data, setData] = useState<string | null>(null);
    return (
        <PreviewContext.Provider value={{ data, setData }}>
            {children}
        </PreviewContext.Provider>
    );
}