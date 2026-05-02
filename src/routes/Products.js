import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.js";

const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    const items = await Product.find().sort({ _id: -1 });
    res.json(items);
  } catch (e) {
    res.status(500).json({ message: String(e.message) });
  }
});

router.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "ID inválido" });
    }
    const item = await Product.findById(id);
    if (!item) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json(item);
  } catch (e) {
    res.status(500).json({ message: String(e.message) });
  }
});

router.post("/products", async (req, res) => {
  try {
    const doc = new Product(req.body);
    const saved = await doc.save();
    res.status(201).json(saved);
  } catch (e) {
    res.status(400).json({ message: String(e.message) });
  }
});

router.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "ID inválido" });
    }
    const item = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json(item);
  } catch (e) {
    res.status(400).json({ message: String(e.message) });
  }
});

router.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "ID inválido" });
    }
    const deleted = await Product.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json({ deleted: true, id });
  } catch (e) {
    res.status(500).json({ message: String(e.message) });
  }
});

export default router;
