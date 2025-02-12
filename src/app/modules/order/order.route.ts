import express, { Request, Response, RequestHandler } from "express";
import { OrderController } from "./order.controller";

const router = express.Router();

// Create a new order
router.post("/create-order", OrderController.createOrder as RequestHandler);

// Get all orders
router.get("/", OrderController.getAllOrders as RequestHandler);

// Calculate total revenue
router.get("/revenue", OrderController.calculateRevenue as RequestHandler);

// Get a single order by ID
router.get("/:orderId", OrderController.getSingleOrder as RequestHandler);

export const OrderRoutes = router;
