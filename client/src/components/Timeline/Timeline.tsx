import React, { useEffect, useState } from 'react';
import {
  useGetPostsQuery,
  useGetPostsLazyQuery,
  GetPostsQuery,
} from '../../generated/graphql';

import TimelineItems from './TimelineItems';
import useScroll from './useScroll';

function Timeline() {
  const [page, setPage] = useState(2);
  const [shouldLoadMore] = useScroll();
  const [data, setData] = useState<GetPostsQuery | null>(null);

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

  if (loading) return <p>Loading...</p>;
  if (!data) return null;

  return <TimelineItems data={data} />;
}

export default Timeline;
