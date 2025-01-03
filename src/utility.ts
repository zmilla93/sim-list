const images: Record<string, string> = import.meta.glob('/src/assets/**/*.{png,jpg,jpeg,webp}', { eager: true, query: 'url', import: 'default' });

function preloadImages() {
    Object.values(images).forEach((src) => {
        const img = new Image();
        console.log(src);
        img.src = src;
    });
}

export function getImage(path: string): string | undefined {
    const filePath = `/src/assets/${path}`;
    const img = images[filePath];
    if (img == undefined) console.error(`Image not found: ${filePath}`);
    return img || undefined;
}

interface JsonFile<T> { default: Array<T>; }

export function getJsonArray<T>(path: string): T[] {
    // FIXME : Cache result
    console.log("Getting json array...");
    const filePath = `/src/data/${path}`;
    const jsonFiles: Record<string, JsonFile<T[]>> = import.meta.glob('/src/data/**/*.json', { eager: true });
    const module = jsonFiles[filePath];
    return module?.default as T[];
}

// preloadImages();