const PORT = process.env.PORT || 3442;
const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: PORT,
    host: "localhost",
  });

  server.route({
    method: "Get",
    path: "/",
    handler: (request, h) => {
      return "hello world";
    },
  });

  await server.start();
  console.log(`Listen on ${PORT}`);
};

process.on("unhandledRejection", () => {
  console.log(err);
  process.exit(1);
});

init();
