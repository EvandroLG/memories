import React from 'react';
import { GetPostsQuery } from '../../generated/graphql';

type PropType = {
  data: GetPostsQuery;
};

function TimelineItems({ data }: PropType) {
  const posts = data.posts?.map(({ id, description, createdAt }) => (
    <div key={id}>
      <p>{description}</p>
      <p>{createdAt}</p>
    </div>
  ));

  return <>{posts}</>;
}

export default TimelineItems;
