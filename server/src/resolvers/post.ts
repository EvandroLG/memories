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

  @Mutation(() => PostSchema, { nullable: true })
  async updatePost(
    @Arg("id") id: String,
    @Arg("description") description: String
  ) {
    try {
      const found = await Post.findByIdAndUpdate(id, { description });
      return found;
    } catch {
      return null;
    }
  }

  @Mutation(() => Boolean)
  async deletePost(@Arg("id") id: String) {
    try {
      await Post.findByIdAndDelete(id);
    } catch {
      return false;
    }

    return true;
  }
}
