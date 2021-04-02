import server from "~/app";
import * as Sentry from "@sentry/node";
import { env } from "~/constants/env";

if (env.SENTRY_DSN)
  Sentry.init({
    dsn: env.SENTRY_DSN,
  });

const start = async () => {
  await server.listen(8080, "0.0.0.0").catch((err) => {
    server.log.error(String(err));
    process.exit(1);
  });
  server.log.info(`server start`);
};

start();
