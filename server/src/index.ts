import express, { Request, Response } from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import cors from "cors";
import helmet from "helmet";

import routes from "./routes";
import { HelloResolver } from "./resolvers/hello";

(async function () {
  const port = process.env.PORT || 9090;
  const app = express();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false,
    }),
  });

  apolloServer.applyMiddleware({ app });

  app.use(helmet());
  app.use(cors());
  app.use(routes);

  app.use(
    (
      error: Error & { status: number; message: string },
      _: Request,
      res: Response
    ) => {
      res.status(error.status ?? 500).json({
        message: error.message,
      });
    }
  );

  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
})();
