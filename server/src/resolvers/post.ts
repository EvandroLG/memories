import { Resolver, Query, Mutation, Arg } from "type-graphql";
import Post, { PostSchema } from "../models/post";

@Resolver()
export class PostResolver {
  @Query(() => [PostSchema])
  async posts() {
    return await Post.find();
  }

  @Mutation(() => PostSchema)
  async createPost(@Arg("description") description: String) {
    return await Post.create({
      description,
    });
  }

  @Mutation(() => PostSchema)
  async updatePost(
    @Arg("id") id: String,
    @Arg("description") description: String
  ) {
    return await Post.findByIdAndUpdate(id, { description });
  }

  @Mutation(() => PostSchema)
  async deletePost(@Arg("id") id: String) {
    return await Post.findByIdAndDelete(id);
  }
}
