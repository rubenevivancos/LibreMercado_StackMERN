import mongoose from 'mongoose';

// Esquema para la colección 'users'
const userSchema = new mongoose.Schema({
  firebaseUID: {
    type: String,
    required: true,
    unique: true,
    maxlength: 255, // Limitar la longitud del campo
  },
  name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'], // Validación de correo electrónico
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
    maxlength: 100,
  },
  postalCode: {
    type: String,
    required: true,
    maxlength: 20,
  }
}, {
  collection: 'users', // Nombre de la colección en MongoDB
  timestamps: false,    // Desactivar createdAt y updatedAt
  versionKey: false     // Eliminar __v de Mongoose
});

// Modelo de Mongoose
const User = mongoose.model('User', userSchema);

export default User;
