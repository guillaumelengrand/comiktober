import Head from 'next/head';
import Header from '../components/header';

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
                            {entry.url ? (
                                <ImageZoom
                                    src={`${entry.url}`}
                                    alt={`${entry.user_name}_${entry.day}`}
                                    isWinner={entry.is_winner}
                                />
                            ) : (
                                <div className="flex flex-col justify-center">
                                    <img className="w-64 h-52" src="/placeholder-image.png" alt="empty_picture" />
                                </div>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
    return (
        <div>
            <Head>
                <title>Cominktober - Submissions</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className="mx-4 mb-4">
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
