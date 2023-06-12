const server = require("./src/app");

const PORT = 3001

server.listen(3001, () => {
    console.log(`Listening on port ${PORT}`)
})