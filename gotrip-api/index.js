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
        url:"https://gotrippf-production.up.railway.app/"
      }
    ]
  },
  apis: [`${path.join(__dirname,"./src/routes/*.js")}`]
}

server.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(swaggerSpec)))

conn.sync({ force : false }).then(() => {
  server.listen(process.env.PORT || 8000, () => {
    console.log(`Listening on port ${process.env.PORT}`);
  });
});