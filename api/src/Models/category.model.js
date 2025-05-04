import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  // MongoDB usa _id por defecto, no hace falta definir id a menos que sea personalizado
  name: {
    type: String,
    required: true,
    maxlength: 100,
  },
}, {
  collection: 'categories',
  timestamps: false,
  versionKey: false
});

const Category = mongoose.model('Category', categorySchema);

export default Category;