import express, { Request, Response, RequestHandler } from "express";
import { OrderController } from "./order.controller";

const router = express.Router();

router.post("/create-order", OrderController.createOrder as RequestHandler);
router.get("/", OrderController.getAllOrders as RequestHandler);
router.get("/revenue", OrderController.calculateRevenue as RequestHandler);
router.get("/:orderId", OrderController.getSingleOrder as RequestHandler);

export const OrderRoutes = router;
