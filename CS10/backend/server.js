import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
// import items from "./data/items.js";

//routes
import itemRoutes from "./routes/v1/itemRoutes.js";

//middle wares
import { notFound, serverError } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const APP = express();
const PORT = process.env.PORT || 8000;

APP.get("/", (request, response) => {
  response.send("Authorized");
});

APP.use("/api/v1/items", itemRoutes);

//error handlers
APP.use(notFound);
APP.use(serverError);

APP.listen(PORT, console.log(`Server is running at port ${PORT}`));
