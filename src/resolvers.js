// src\resolvers.js
import  User  from './models/User.js';
import Post  from './models/Post.js';

export const resolvers = {
  Query: {
    users: async () => User.find(),
    user: async (_, { id }) => User.findById(id),
    posts: async () => Post.find(),
  },

  Mutation: {
    createUser: async (_, { input }) => {
      const user = new User(input);
      return user.save();
    },
    createPost: async (_, { input }) => {
      const post = new Post(input);
      return post.save();
    },
  },

  // field resolvers
  User: {
    posts: async (parent) => Post.find({ authorId: parent.id }),
  },
  Post: {
    author: async (parent) => User.findById(parent.authorId),
  },
};
