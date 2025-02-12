import { Request, Response } from "express";
import { Product } from "./product.model";

const createProduct = async (req: Request, res: Response) => {
  try {
    const result = await Product.create(req.body);
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Validation failed",
      success: false,
      error: error.name,
      stack: error.stack,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await Product.find();
    res.status(200).json({
      success: true,
      message: "Products retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Failed to get products",
      success: false,
      error: error.name,
      stack: error.stack,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const result = await Product.findById(req.params.productId);
    if (!result) {
      return res.status(404).json({
        message: "Product not found",
        success: false,
        error: "Resource not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Book retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Failed to get product",
      success: false,
      error: error.name,
      stack: error.stack,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;

    const result = await Product.findByIdAndUpdate(productId, updateData, {
      new: true,
    });

    if (!result) {
      return res.status(404).json({
        message: "Product not found",
        success: false,
        error: "Resource not found",
      });
    }

    res.status(200).json({
      message: "Book updated successfully",
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Failed to update product",
      success: false,
      error: error.name,
      stack: error.stack,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const result = await Product.findByIdAndDelete(req.params.productId);
    if (!result) {
      return res.status(404).json({
        message: "Product not found",
        success: false,
        error: "Resource not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: {},
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Failed to delete product",
      success: false,
      error: error.name,
      stack: error.stack,
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
