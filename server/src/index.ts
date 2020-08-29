import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";

import routes from "./routes";
import { PostResolver } from "./resolvers/post";

(async function () {
  mongoose.connect("mongodb://127.0.0.1:27017/memories", {
    useNewUrlParser: true,
  });

  const port = process.env.PORT || 9090;
  const app = express();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PostResolver],
      validate: false,
    }),
  });

  apolloServer.applyMiddleware({ app });

  app.use(helmet());
  app.use(cors());
  app.use(routes);

  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
})();
