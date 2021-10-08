import {getDays} from '../dao/day';

export async function getAllDay() {
    const days = await getDays();
    return days;
}
