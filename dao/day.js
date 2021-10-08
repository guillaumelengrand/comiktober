import {query} from '../lib/db';

export async function getDays() {
    const results = await query(
        `
        SELECT * FROM days
        `,
    );
    return JSON.parse(JSON.stringify(results));
}
