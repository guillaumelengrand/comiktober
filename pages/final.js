import Head from 'next/head';
import Header from '../components/header';

import ImageZoom from '../components/image-zoom';
import {getTimeline} from '../model/entry';

export default function Final({timeline}) {
    const dayComponent = entryDay => (
        <div className="pb-2 my-4 bg-white rounded" key={entryDay.id}>
            <h2 className="m-2 text-xl capitalize">
                {entryDay.name} - {entryDay.theme}
            </h2>
            <div className="flex flex-row justify-center">
                <div className="flex flex-row px-2">
                    <img
                        className="h-10 rounded-full"
                        src={`/avatars/${entryDay.user_name}.png`}
                        alt={`${entryDay.user_name}`}
                    />
                    {entryDay.url ? (
                        <ImageZoom
                            src={`${entryDay.url}`}
                            alt={`${entryDay.user_name}_${entryDay.day}`}
                            isWinner={entryDay.is_winner}
                        />
                    ) : (
                        <div className="flex flex-col justify-center">
                            <img className="w-64 h-52" src="/placeholder-image.png" alt="empty_picture" />
                        </div>
                    )}
                </div>
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
                {timeline &&
                    timeline.map(entryDay => {
                        return dayComponent(entryDay);
                    })}
            </main>

            <footer></footer>
        </div>
    );
}

export async function getServerSideProps() {
    const EntriesFormatByDay = await getTimeline();
    return {
        props: {
            timeline: EntriesFormatByDay,
        },
    };
}
