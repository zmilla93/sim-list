
export enum Rarity {
    Common, Uncommon, Rare
}

export type int = number;
export type float = number;

export type Collectable = {
    name: string,
    rarity: string,
    value: int,
    elements: string[],
    metals: string[],
    crystals: string[],
}

export type CollectableElement ={
    name:string,
    rarity:string,
    value:number,
    elements:string[],
}