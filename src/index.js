// // src\index.js
// import express from 'express';
// import { ApolloServer } from 'apollo-server-express';
// import { connectDB } from './db.js';
// import { expressMiddleware } from '@apollo/server/express4';
// import { schema } from './graphql/schema.js';
// import cors from 'cors';
// import dotenv from 'dotenv';

// dotenv.config();

// const startServer = async () => {
//   await connectDB();

//   const app = express();
//   app.use(cors());

//   const server = new ApolloServer({
//     schema,
//   });

//   await server.start();
//   server.applyMiddleware({ app });

//   app.listen({ port: 4000 }, () =>
//    console.log('🚀 Server running at http://localhost:8000/graphql')
//   );
// };

// startServer();

/* old method */
import express from 'express';

import { ApolloServer } from 'apollo-server-express';
import { connectDB } from './db.js';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { schema } from './graphql/schema.js';

const startServer = async () => {
  await connectDB();

  const app = express();
  const server = new ApolloServer({
    schema,
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
