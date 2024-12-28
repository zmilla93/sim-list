export function ExternalLink({ text, href }: { text: string, href: string }) {
    return <a href={href} target="_blank">{text}</a>;
}