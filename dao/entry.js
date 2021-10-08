import {query} from '../lib/db';

export async function getEntries() {
    const results = await query(
        `
        SELECT * FROM entries
        `,
    );
    return results;
}

export async function getEntryDays() {
    const results = await query(
        `
        SELECT DISTINCT day FROM entries
        `,
    );
    return results;
}

export async function getEntriesByDay(day) {
    const results = await query(
        `
        SELECT * FROM entries
        WHERE day LIKE ?
        `,
        [day],
    );
    return JSON.parse(JSON.stringify(results));
}
