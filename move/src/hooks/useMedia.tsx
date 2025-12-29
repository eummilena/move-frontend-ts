import { useEffect, useState } from 'react'


const useMedia = (media: string) => {

    const [match, setMatch] = useState(() => window.matchMedia(media).matches);

    useEffect(() => {

        const mediaQuery = window.matchMedia(media);


        const handler = (event: MediaQueryListEvent) => {
            setMatch(event.matches);
        };

        mediaQuery.addEventListener('change', handler);

        return () => {

            mediaQuery.removeEventListener('change', handler);
        }
    }, [media])

    return match;
}

export default useMedia