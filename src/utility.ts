const images: Record<string, string> = import.meta.glob('/src/assets/**/*.{png,jpg,jpeg,webp}', { eager: true, query: 'url', import: 'default' });

export function getImage(path: string): string | undefined {
    const filePath = `/src/assets/${path}`;
    return images[filePath] || undefined;
}

interface JsonFile<T> { default: Array<T>; }

export function getJsonArray<T>(path: string): T[] {
    // FIXME : Cache result
    const filePath = `/src/data/${path}`;
    const jsonFiles: Record<string, JsonFile<T[]>> = import.meta.glob('/src/data/**/*.json', { eager: true });
    const module = jsonFiles[filePath];
    return module?.default as T[];
}