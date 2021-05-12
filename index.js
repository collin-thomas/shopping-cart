const path = require("path");
const express = require("express");
const app = express();
app.use(express.json());
const port = 1337;

// store contacts in an array
const contacts = [];
const products = [];

/* app.get("/", (req, res) => {
  res.send(
    "<h1>Routes: Try a GET request to /contacts and a POST request to /contact</h1>"
  );
});
 */
app.use("/", express.static("public"));

// list all contacts
app.get("/api/contact", (req, res) => {
  res.json(contacts);
});

// add a contact
app.post("/api/contact", (req, res) => {
  contacts.push({ name: req.body.name, email: req.body.email });
  res.json(req.body);
});

app.get("/api/product", (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
