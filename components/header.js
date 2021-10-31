import Link from 'next/link';

export default function Header() {
    return (
        <div className="flex justify-center m-4">
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold">Cominktober - Submissions</h1>
                <div className="flex flex-row justify-center text-white">
                    <Link href="/">
                        <a>Index</a>
                    </Link>
                    <div className="px-2">-</div>
                    <Link href="/submissions">
                        <a>Submissions</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
