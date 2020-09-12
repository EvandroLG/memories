import React from 'react';
import { useForm } from 'react-hook-form';
import { useNewPostMutation } from '../../generated/graphql';

type InputType = {
  description: string;
};

function NewPost() {
  const [newPostMutation] = useNewPostMutation();
  const { handleSubmit, register, errors } = useForm<InputType>();
  const onSubmit = (data: InputType) => {
    newPostMutation({ variables: data });
    window.location.href = '/';
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="description"
        placeholder="Description"
        ref={register({ required: true })}
      />
      {errors.description && <span>Description is required</span>}
      <button type="submit">Post!</button>
    </form>
  );
}

export default NewPost;
