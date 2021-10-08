import Head from 'next/head';

import ImageZoom from '../components/image-zoom';
import {getAllDay} from '../model/day';
import {getEntriesFormatByDay} from '../model/entry';

export default function Home({days, entries}) {
    const dayComponent = (day, entries) => (
        <div className="pb-2 my-4 bg-white rounded" key={day.id}>
            <h2 className="m-2 text-xl capitalize">
                {day.name} - {day.theme}
            </h2>
            <div className="flex flex-row justify-center">
                {entries &&
                    entries.map(entry => (
                        <div className="flex flex-row px-2" key={entry.id}>
                            <img
                                className="h-10 rounded-full"
                                src={`/avatars/${entry.user_name}.png`}
                                alt={`${entry.user_name}`}
                            />
                            <ImageZoom
                                src={`${entry.url}`}
                                alt={`${entry.user_name}_${entry.day}`}
                                isWinner={entry.is_winner}
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
    return (
        <div>
            <Head>
                <title>Comiktober - Submissions</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="m-4">
                <h1 className="text-2xl font-bold">Comiktober - Submissions</h1>
                {days &&
                    days.map(day => {
                        return dayComponent(day, entries[day.accro]);
                    })}
            </main>

            <footer></footer>
        </div>
    );
}

export async function getServerSideProps() {
    const days = await getAllDay();
    const EntriesFormatByDay = await getEntriesFormatByDay();
    return {
        props: {
            days,
            entries: EntriesFormatByDay,
        },
    };
}
