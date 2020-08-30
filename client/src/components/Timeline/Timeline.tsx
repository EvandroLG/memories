import React from 'react';
import { useGetPostsQuery } from '../../generated/graphql';
import TimelineItems from './TimelineItems';

function Timeline() {
  const { loading, data } = useGetPostsQuery();

  if (loading) return <p>Loading...</p>;

  return <TimelineItems data={data} />;
}

export default Timeline;