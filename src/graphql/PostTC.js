import { composeWithMongoose } from "graphql-compose-mongoose";
import Post from "../models/Post.js";

// mongoose --> TypeComposer 
const customisationOptions = {};
export const PostTC = composeWithMongoose(Post, customisationOptions);  

PostTC.addRelation("author", {
  resolver: () => PostTC.getResolver("findOne"),
  prepareArgs: {
    authorId: (source) => source.authorId,
  },
});