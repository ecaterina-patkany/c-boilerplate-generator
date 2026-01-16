export interface MenuOption {
    value: number;
    label: string;
}

/**
 * Extract the first multiline C comment from a file
 */
export function extractFirstMultilineComment(text: string): string | null {
    const match = text.match(/\/\*([\s\S]*?)\*\//);
    return match ? match[1].trim() : null;
}

/**
 * Parse menu options from problem statement
 */
export function parseMenuOptions(commentText: string): MenuOption[] {
    const lines = commentText.split(/\r?\n/);
    const options: MenuOption[] = [];

    for (const line of lines) {
        const trimmed = line.trim();
        const match = trimmed.match(/^(\d+)\.\s*(.+)$/);
        if (match) {
            const value = parseInt(match[1], 10);
            const label = match[2].trim();
            options.push({ value, label });
        }
    }

    return options;
}