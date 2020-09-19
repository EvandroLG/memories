import { useEffect, useCallback, useState } from 'react';
import { debounce } from '../../utils';

const useScroll = () => {
  const [shouldLoadMore, setShouldLoadMore] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;

    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;

    setShouldLoadMore(scrollTop + window.innerHeight + 50 >= scrollHeight);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 250));
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return [shouldLoadMore];
};

export default useScroll;
