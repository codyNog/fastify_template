import server from "./app";

const start = async () => {
  await server.listen(8080, "0.0.0.0").catch((err) => {
    server.log.error(String(err));
    process.exit(1);
  });
  server.log.info(`server start`);
};

start();
