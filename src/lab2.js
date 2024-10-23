/**
 Todo Complete this app
 
 - Check the documentation of expressjs
 - Create an express server
 - The server should implements the following APIs
  // app.get
  // app.post
  // app.put
  // app.delete
  // app.all
  // app.use
  // app.listen

  -- Hint, use postman to interact with the server 
  
 */

const express = require("express");
const app = express();

// Middleware pour traiter les données JSON envoyées dans les requêtes POST/PUT
app.use(express.json());

/**
 * API: app.get
 * Description: Récupère des données.
 */
app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

/**
 * API: app.post
 * Description: Reçoit des données (par ex. un formulaire ou des données envoyées par l'utilisateur).
 */
app.post("/submit", (req, res) => {
  const data = req.body;
  res.send(`POST request received with data: ${JSON.stringify(data)}`);
});

/**
 * API: app.put
 * Description: Met à jour des données.
 */
app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  res.send(`PUT request to update item with id ${id}: ${JSON.stringify(updatedData)}`);
});

/**
 * API: app.delete
 * Description: Supprime des données.
 */
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  res.send(`DELETE request to delete item with id ${id}`);
});

/**
 * API: app.all
 * Description: Gère toutes les méthodes HTTP pour un chemin spécifique.
 */
app.all("/all-methods", (req, res) => {
  res.send(`Request with method: ${req.method} handled at /all-methods`);
});

/**
 * Middleware global (app.use)
 * Description: Gère les erreurs 404 pour toutes les routes non définies.
 */
app.use((req, res, next) => {
  res.status(404).send("Sorry, this page does not exist!");
});

/**
 * API: app.listen
 * Description: Lance le serveur sur le port 3000.
 */
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

