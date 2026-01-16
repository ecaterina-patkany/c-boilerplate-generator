import { extractFirstMultilineComment, parseMenuOptions, MenuOption } from '../../src/utils/parser';

describe('Parser Utilities', () => {

    test('extractFirstMultilineComment returns the first comment', () => {
        const text = `
        /*
        1. Add
        2. Delete
        */
        int main() {}
        `;
        const result = extractFirstMultilineComment(text);
        expect(result).toContain('1. Add');
        expect(result).toContain('2. Delete');
    });

    test('extractFirstMultilineComment returns null if none exists', () => {
        const text = 'int main() {}';
        const result = extractFirstMultilineComment(text);
        expect(result).toBeNull();
    });

    test('parseMenuOptions parses numbered lines correctly', () => {
        const comment = `
        1. Add element
        2. Delete element
        0. Exit
        `;
        const expected: MenuOption[] = [
            { value: 1, label: 'Add element' },
            { value: 2, label: 'Delete element' },
            { value: 0, label: 'Exit' }
        ];
        const result = parseMenuOptions(comment);
        expect(result).toEqual(expected);
    });

    test('parseMenuOptions ignores non-matching lines', () => {
        const comment = `
        1. Add
        Some random text
        0. Exit
        `;
        const expected: MenuOption[] = [
            { value: 1, label: 'Add' },
            { value: 0, label: 'Exit' }
        ];
        expect(parseMenuOptions(comment)).toEqual(expected);
    });

});