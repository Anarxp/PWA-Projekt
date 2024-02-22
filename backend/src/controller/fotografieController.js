import asyncHandler from "express-async-handler";
import * as model from "../model/fotografieModel.js";

// eslint-disable-next-line import/prefer-default-export
export const getFotos = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getFotosDB());
});

export const postFotos = asyncHandler(async (req, res) => {
  const { image_url, title, description, resolution, camera, datum } = req.body;
  res.status(200).json(await model.postFotosDB(image_url, title, description, resolution, camera, datum));
});

export const updateFotos = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  res.status(200).json(await model.updateFotosDB(title, description, req.params.id));
});

export const deleteFotos = asyncHandler(async (req, res) => {
  res.status(200).json(await model.deleteFotosDB(req.params.id));
});
