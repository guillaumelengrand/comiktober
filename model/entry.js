import {getEntries, getEntriesByDay, getEntryDays} from '../dao/entry';

export async function getAllEntry() {
    const entries = await getEntries();
    return entries;
}

export async function getEntriesFormatByDay() {
    const days = await getEntryDays();

    var formatEntries = {};
    for (const day of days) {
        formatEntries[day.day] = await getEntriesByDay(day.day);
    }

    return formatEntries;
}
