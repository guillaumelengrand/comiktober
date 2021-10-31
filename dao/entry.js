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

export async function getEntriesTimeline() {
    const results = await query(
        `
        SELECT * FROM entries
        WHERE timeline = 1
        `,
    );
    return JSON.parse(JSON.stringify(results));
}

export async function getTimelineWithDay() {
    const results = await query(
        `select * from entries
        inner join days
        on entries.day = days.accro
        where entries.timeline = 1;`,
    );

    return JSON.parse(JSON.stringify(results));
}
