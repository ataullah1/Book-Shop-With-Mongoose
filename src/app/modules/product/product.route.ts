import express, { Request, Response, RequestHandler } from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post(
  "/create-product",
  ProductController.createProduct as RequestHandler
);
router.get("/", ProductController.getAllProducts as RequestHandler);
router.get("/:id", ProductController.getSingleProduct as RequestHandler);
router.patch("/:id", ProductController.updateProduct as RequestHandler);
router.delete("/:id", ProductController.deleteProduct as RequestHandler);

export const ProductRoutes = router;
