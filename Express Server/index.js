// import express from "express";

// // create app
// const app = express();

// // listern port
// const port = 3000;

// app.listen(port, () => {
//   console.log(`Server running on port ${port}.`);
// });

import express from "express";
const app = express();

const port = 3000;

app.post("/register", (req, res) => {
  res.sendStatus(201);
});

app.put("/user/prabha", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/patch", (req, res) => {
  res.sendStatus(200);
});

app.get("/hello", (req, res) => {
  console.log(req);
  res.send("<h1>Hello world from Express!.</h1>");
});

app.get("/home", (req, res) => {
  res.send("<h1> Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About me</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h2>Contact: </h2> +917095262400");
});

app.delete("/delete", (req, res) => {
  res.send(200);
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
  return "Hello world";
});
