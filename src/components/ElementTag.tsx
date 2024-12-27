export type ElementTagProps = {
    name:string
}

export function ElementTag(props:ElementTagProps) {
    return <div>
        {props.name}
    </div>
}