/**
 Todo Complete this app
 
 - Check the documentation of expressjs
 - Create a server that serves a static folder: `public`
 - If an url is not found, the server should serve 'Page not found'
 */

 const express = require("express");

 const PORT = 3000 ; 

 const app = express();

 const staticMiddleware = express.static("public");

 app.use(staticMiddleware);

 app.use(PORT, () => {
    console.log(`Server is running on port : ${PORT}`)
 })