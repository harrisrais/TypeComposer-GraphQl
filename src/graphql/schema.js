/* New method using schema-composer */
import { SchemaComposer } from "graphql-compose";
import { UserTC } from "./UserTC.js";
import { PostTC } from "./PostTC.js";

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
  users: UserTC.getResolver('findMany'),
  posts: PostTC.getResolver('findMany'),
});

schemaComposer.Mutation.addFields({
  createUser: UserTC.getResolver('createOne'),
  createPost: PostTC.getResolver('createOne'),
});

export const schema = schemaComposer.buildSchema();

/* Older method where we were using typeDefs and resolvers to make executable schema */
// import {makeExecutableSchema} from '@graphql-tools/schema';
// import { typeDefs } from './typeDefs.js';
// import { resolvers } from './resolvers.js';

// export const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
// });
// // export  