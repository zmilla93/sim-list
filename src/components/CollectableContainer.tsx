import { ReactNode } from "react"

export type CollectableContainerProps = {
    children?:ReactNode;
}

export function CollectableContainer(props:CollectableContainerProps){
    return(<div className=" flex flex-wrap justify-center border border-red-600 p-1">
        {props.children}
    </div>)
}