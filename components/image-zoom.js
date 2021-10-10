import {useState} from 'react';

export default function ImageZoom({src, alt, isWinner}) {
    const [isZoom, setIsZoom] = useState(false);
    const onClick = e => {
        setIsZoom(!isZoom);
    };
    var winnerCss = '';
    if (isWinner) {
        winnerCss = 'border-4 border-green-600';
    }
    return (
        <div>
            <img className={`max-h-96 ${winnerCss}`} src={src} alt={alt} onClick={onClick} />

            {isZoom && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50" onClick={onClick}>
                    <div className="flex flex-row justify-center">
                        <img className="max-h-screen py-4" src={src} alt={alt} />
                    </div>
                </div>
            )}
        </div>
    );
}
