import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  posts: Array<PostSchema>;
};

/** The Post model */
export type PostSchema = {
  __typename?: 'PostSchema';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
};


export type Mutation = {
  __typename?: 'Mutation';
  createPost: PostSchema;
  updatePost?: Maybe<PostSchema>;
  deletePost: Scalars['Boolean'];
};


export type MutationCreatePostArgs = {
  description: Scalars['String'];
};


export type MutationUpdatePostArgs = {
  description: Scalars['String'];
  id: Scalars['String'];
};


export type MutationDeletePostArgs = {
  id: Scalars['String'];
};

export type NewPostMutationVariables = Exact<{
  description: Scalars['String'];
}>;


export type NewPostMutation = (
  { __typename?: 'Mutation' }
  & { createPost: (
    { __typename?: 'PostSchema' }
    & Pick<PostSchema, 'id' | 'createdAt' | 'description'>
  ) }
);

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'PostSchema' }
    & Pick<PostSchema, 'id' | 'description' | 'createdAt'>
  )> }
);


export const NewPostDocument = gql`
    mutation newPost($description: String!) {
  createPost(description: $description) {
    id
    createdAt
    description
  }
}
    `;
export type NewPostMutationFn = Apollo.MutationFunction<NewPostMutation, NewPostMutationVariables>;

/**
 * __useNewPostMutation__
 *
 * To run a mutation, you first call `useNewPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newPostMutation, { data, loading, error }] = useNewPostMutation({
 *   variables: {
 *      description: // value for 'description'
 *   },
 * });
 */
export function useNewPostMutation(baseOptions?: Apollo.MutationHookOptions<NewPostMutation, NewPostMutationVariables>) {
        return Apollo.useMutation<NewPostMutation, NewPostMutationVariables>(NewPostDocument, baseOptions);
      }
export type NewPostMutationHookResult = ReturnType<typeof useNewPostMutation>;
export type NewPostMutationResult = Apollo.MutationResult<NewPostMutation>;
export type NewPostMutationOptions = Apollo.BaseMutationOptions<NewPostMutation, NewPostMutationVariables>;
export const GetPostsDocument = gql`
    query GetPosts {
  posts {
    id
    description
    createdAt
  }
}
    `;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
        return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, baseOptions);
      }
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, baseOptions);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;