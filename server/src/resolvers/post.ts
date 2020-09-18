import { Resolver, Query, Mutation, Arg, Int } from "type-graphql";
import Post, { PostSchema } from "../models/post";

@Resolver()
export class PostResolver {
  @Query(() => [PostSchema])
  async posts(
    @Arg("page", () => Int!) page: number,
    @Arg("limit", () => Int, { nullable: true }) limit: number | null
  ) {
    const _limit = Math.min(20, limit ?? 20);
    const skip = (page - 1) * _limit;

    return await Post.find().limit(_limit).skip(skip).sort({ _id: -1 });
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
