import "reflect-metadata";
import { Field, ID, ObjectType } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

@ObjectType({ description: "The Post model" })
export class PostSchema {
  @Field(() => ID)
  id: number;

  @Field()
  @Property({ default: Date.now() })
  createdAt?: Date;

  @Field()
  @Property()
  description: String;
}

export default getModelForClass(PostSchema);
