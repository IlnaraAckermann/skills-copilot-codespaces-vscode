// Create web server
// use a faker to generate random data
// no db
// no front end
// use express
// 1. create a web server
// 2. create a route to get all comments
// 3. create a route to get a comment by id
// 4. create a route to create a comment
// 5. create a route to update a comment
// 6. create a route to delete a comment

const express = require("express");
const faker = require("faker");
const app = express();
const PORT = 3000;

// 1. create a web server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// 2. create a route to get all comments
app.get("/comments", (req, res) => {
  const comments = [];
  for (let i = 0; i < 10; i++) {
    comments.push({
      id: i + 1,
      name: faker.name.findName(),
      email: faker.internet.email(),
      body: faker.lorem.sentence(),
    });
  }
  res.json(comments);
});

// 3. create a route to get a comment by id
app.get("/comments/:id", (req, res) => {
  const id = req.params.id;
  const comment = {
    id,
    name: faker.name.findName(),
    email: faker.internet.email(),
    body: faker.lorem.sentence(),
  };
  res.json(comment);
});

// 4. create a route to create a comment
app.post("/comments", (req, res) => {
  const comment = {
    id: 11,
    name: faker.name.findName(),
    email: faker.internet.email(),
    body: faker.lorem.sentence(),
  };
  res.json(comment);
});

// 5. create a route to update a comment
app.put("/comments/:id", (req, res) => {
  const id = req.params.id;
  const comment = {
    id,
    name: faker.name.findName(),
    email: faker.internet.email(),
    body: faker.lorem.sentence(),
  };
  res.json(comment);
});

// 6. create a route to delete a comment
app.delete("/comments/:id", (req, res) => {
  const id = req.params.id;
  res.json({ message: `Comment ${id} has been deleted` });
});