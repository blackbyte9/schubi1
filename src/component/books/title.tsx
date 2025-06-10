

export function BookTitle(isbn: string | undefined, title: string | undefined): string {
    return (
        ` ${title} (${isbn})`
    );
}