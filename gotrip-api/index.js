const server = require("./src/app");
const { conn } = require("./src/db");
const path  = require("path");

// Swagger 

const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc') 

const swaggerSpec = {
  definition:{
    openapi:"3.0.0",
    info:{
      title:"gotrip API",
      version:"1.0"
    },
    servers:[
      {
        url:"http://localhost:3001"
      }
    ]
  },
  apis: [`${path.join(__dirname,"./src/routes/*.js")}`]
}

server.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(swaggerSpec)))

const PORT = 3001;
conn.sync({ force : false }).then(() => {
  server.listen(3001, () => {
    console.log(`Listening on port ${PORT}`);
  });
});