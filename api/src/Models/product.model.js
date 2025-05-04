import mongoose from 'mongoose';

// Esquema para la colección 'products'
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 255, // Límite de longitud para el título
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: mongoose.Decimal128, // Usamos Decimal128 para manejar decimales con precisión
    required: true,
  },
  discountPercentage: {
    type: mongoose.Decimal128,  // Usamos Decimal128 para manejar decimales
    required: false,
  },
  rating: {
    type: mongoose.Decimal128,  // Usamos Decimal128 para manejar decimales
    required: false,
  },
  stock: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
    maxlength: 100,
  },
  thumbnail: {
    type: String,
    required: true,
    maxlength: 255,
  },
  categoryID: {
    type: mongoose.Schema.Types.ObjectId, // Relación con Category usando ObjectId
    required: true,
    ref: 'Category',  // Relacionamos con el modelo Category (se hace por referencia)
  }
}, {
  collection: 'products', // Nombre de la colección en MongoDB
  timestamps: false,      // Desactivar createdAt y updatedAt
  versionKey: false       // Eliminar __v de Mongoose
});

// Modelo de Mongoose
const Product = mongoose.model('Product', productSchema);

export default Product;
