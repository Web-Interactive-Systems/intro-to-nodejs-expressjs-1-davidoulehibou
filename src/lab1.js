const http = require("http");
const fs = require("fs");
const path = require("path");

/**
 * Todo Complete this app to serve the content inside `static` folder
 * 
 * - Create an http server that serves the app in: `static/html/index.html`
 * - The app shows navigation pages that should be created and placed inside `static/html`
 * - If an url is not found the app should serve "Page not found"
 */
const INDEX_URL = "./src/static/html/index.html"


const server = http.createServer((req, res) => {

  if (req.url === "/" || req.url === "/index.html") {
    
    const indexPage = fs.readFileSync(INDEX_URL);
    res.end(indexPage);
  }else{
    res.writeHead(404);
    res.end();
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});