import React from 'react';

type PropType = any;

function TimelineItems({ data }: PropType) {
  return data.posts.map(({ description, createdAt }: any) => (
    <div>
      <p>{description}</p>
      <p>{createdAt}</p>
    </div>
  ));
}

export default TimelineItems;
