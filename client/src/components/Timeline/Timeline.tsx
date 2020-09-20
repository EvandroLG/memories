import React from 'react';
import TimelineItems from './TimelineItems';
import useLoadData from './useLoadData';

function Timeline() {
  const { data, loading } = useLoadData();

  if (loading) return <p>Loading...</p>;
  if (!data) return null;

  return <TimelineItems data={data} />;
}

export default Timeline;
