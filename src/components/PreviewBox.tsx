import { usePreview } from "../context/PreviewContext";

export function PreviewBox() {
    const preview = usePreview();
    return (
        <div className=" absolute left-1 bottom-1 border border-red-500 rounded">
            <h2>Preview Box</h2>
            <p>{preview.data && preview.data}</p>
            <p>Preview box content</p>
        </div>
    );
}