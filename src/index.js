// src\index.js
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './typeDefs.js';
import { resolvers } from './resolvers.js';
import { connectDB } from './db.js';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';


const startServer = async () => {
  await connectDB();

  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true, // allow the schema to be visible
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })], // enable the Apollo Sandbox UI
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
