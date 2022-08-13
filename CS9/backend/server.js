import express from "express";
import dotenv from "dotenv";

//local data
import items from "./data/items.js";
import users from "./data/users.js";
import orders from "./data/orders.js";

dotenv.config();

const APP = express();
const PORT = process.env.PORT || 8000;

APP.get("/", (request, response) => {
  response.send("Authorized");
});

// get method to display items
APP.get("/api/v1/items", (request, response) => {
  response.json(items);
});

// get method to display single item w /id
APP.get("/api/v1/items/:id", (request, response) => {
  const item = items.find((item) => item._id === request.params.id);
  response.json(item);
});

APP.get("/api/v1/users", (request, response) => {
  response.json(users);
});

APP.get("/api/v1/user/:userId", (request, response) => {
  const user = users.find((user) => user.userId === request.params.userId);
  response.json(user);
});

APP.get("/api/v1/orders", (request, response) => {
  response.json(orders);
});

APP.get("/api/v1/order/:orderId", (request, response) => {
  const order = orders.find((order) => order.user === request.params.orderId);
  response.json(order);
});

APP.listen(PORT, console.log(`Server is running at port ${PORT}`));
