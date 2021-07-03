const app = require("fastify")({ logger: true });
const cors = require("cors");

require("dotenv").config();

await app.register(require("middie"));
app.use(cors());

app.register(require("./src/routes/resource"));

app.get("/", (req, res) => {
  res.send({ Welcome_Message: "Welcome to Devsources API" });
});

app.listen(process.env.PORT, `0.0.0.0`, (err, addr) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }

  app.log.info(`Your server is listening on port ${process.env.PORT}`);
});
