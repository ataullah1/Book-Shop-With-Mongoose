import express, { Application } from "express";
import cors from "cors";
import { OrderRoutes } from "./app/modules/order/order.route";
import { ProductRoutes } from "./app/modules/product/product.route";

const app: Application = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);

export default app;
