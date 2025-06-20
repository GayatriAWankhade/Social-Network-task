import { useEffect, useState } from 'react';

interface InfiniteScrollOptions {
  callback: () => void;
  threshold?: number;
}

export const useInfiniteScroll = ({ callback, threshold = 300 }: InfiniteScrollOptions) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + threshold >=
          document.documentElement.offsetHeight &&
        !isFetching
      ) {
        setIsFetching(true);
        callback();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [callback, threshold, isFetching]);

  useEffect(() => {
    if (isFetching) setIsFetching(false);
  }, [isFetching]);

  return { isFetching };
};
