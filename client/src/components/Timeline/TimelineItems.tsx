import React from 'react';
import { GetPostsQuery } from '../../generated/graphql';

type PropType = {
  data: GetPostsQuery;
};

function TimelineItems({ data }: PropType) {
  const posts = data.posts?.map(({ description, createdAt }) => (
    <div>
      <p>{description}</p>
      <p>{createdAt}</p>
    </div>
  ));

  return <>{posts}</>;
}

export default TimelineItems;
