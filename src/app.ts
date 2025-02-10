import express, { Application, Request, Response } from "express";
import cors from "cors";
import path from "path";
import { OrderRoutes } from "./app/modules/order/order.route";
import { ProductRoutes } from "./app/modules/product/product.route";
import { generateUI } from "./views/uiGenerator";

const app: Application = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Root route
app.get("/", (req: Request, res: Response) => {
  const html = generateUI();
  res.send(html);
});

// Routes
app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);

export default app;
