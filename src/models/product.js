import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  Descripcion: String,
  Precio: { type: Number, min: 0 },
  Categoria_videojuego: String,
});

const product = mongoose.model("Productos", productSchema);




export default product;