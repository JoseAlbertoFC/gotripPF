const server = require("./src/app");
const { conn } = require("./src/db");

const PORT = 3001;
conn.sync({ alter: true }).then(() => {
  server.listen(3001, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
