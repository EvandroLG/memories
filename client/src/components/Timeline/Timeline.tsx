import React, { useEffect } from 'react';
import { useGetPostsQuery } from '../../generated/graphql';
import TimelineItems from './TimelineItems';
import useScroll from './useScroll';

function Timeline() {
  const { loading, data } = useGetPostsQuery();
  const [shouldLoadMore] = useScroll();

  useEffect(() => {
    if (shouldLoadMore) {
      console.log('load more');
    }
  }, [shouldLoadMore]);

  if (loading) return <p>Loading...</p>;
  if (!data) return null;

  return <TimelineItems data={data} />;
}

export default Timeline;
