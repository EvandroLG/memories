import { useEffect, useState } from 'react';
import useScroll from './useScroll';
import {
  useGetPostsQuery,
  useGetPostsLazyQuery,
  GetPostsQuery,
} from '../../generated/graphql';

const useLoadData = () => {
  const [page, setPage] = useState(2);
  const [shouldLoadMore] = useScroll();
  const [data, setData] = useState<null | GetPostsQuery>(null);

  const { loading, data: firstData } = useGetPostsQuery({
    variables: { page: 1 },
  });

  const [getPosts, { data: newData }] = useGetPostsLazyQuery();

  useEffect(() => {
    if (shouldLoadMore) {
      getPosts({
        variables: { page },
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldLoadMore, getPosts]);

  useEffect(() => {
    if (firstData) {
      setData(firstData);
    }
  }, [firstData]);

  useEffect(() => {
    if (newData) {
      setData({ posts: [...(data ? data.posts : []), ...newData.posts] });
      setPage(page + 1);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newData]);

  return { data, loading };
};

export default useLoadData;
