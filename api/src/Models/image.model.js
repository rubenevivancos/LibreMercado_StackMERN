import mongoose from 'mongoose';

// Esquema para la colección 'images'
const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    maxlength: 255,
  },
  productID: {
    type: mongoose.Schema.Types.ObjectId, // Relación con Product usando ObjectId
    required: true,
    ref: 'Product',  // Relacionamos con el modelo Product (se hace por referencia)
  }
}, {
  collection: 'images', // Nombre de la colección
  timestamps: false,    // Desactivar createdAt y updatedAt
  versionKey: false     // Eliminar __v de Mongoose
});

// Modelo de Mongoose
const Image = mongoose.model('Image', imageSchema);

export default Image;
