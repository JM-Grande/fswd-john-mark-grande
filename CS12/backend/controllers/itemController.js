import asyncHandler from "express-async-handler";
import Item from "../models/itemModel.js";

const getItems = asyncHandler(async (request, response) => {
  const ITEMS = await Item.find({});

  response.json(ITEMS);
});

const getItemById = asyncHandler(async (request, response) => {
  const ITEM = await Item.findById(request.params.id);

  if (ITEM) {
    response.json(ITEM);
  } else {
    response.status(404);
    throw new Error("Product not Found");
  }
});

export { getItems, getItemById };
