import express, { Request, Response, RequestHandler } from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post(
  "/create-product",
  ProductController.createProduct as RequestHandler
);
router.get("/", ProductController.getAllProducts as RequestHandler);
router.get("/:productId", ProductController.getSingleProduct as RequestHandler);
router.put("/:productId", ProductController.updateProduct as RequestHandler);
router.delete("/:productId", ProductController.deleteProduct as RequestHandler);

export const ProductRoutes = router;
