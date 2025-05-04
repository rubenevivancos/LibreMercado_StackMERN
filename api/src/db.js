import mongoose from 'mongoose';


// URL de conexión a MongoDB en Atlas
const mongoUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB_NAME}`;


// Opciones de configuración de conexión
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Se pueden agregar más opciones
};


const mongooseConnection = async () => {
  console.log("Intentando conectar a MongoDB...");
  try {
    await mongoose.connect(mongoUrl, mongooseOptions);
    console.log('Conexión exitosa a MongoDB');
  } catch (err) {
    console.error('Error al conectar a MongoDB:', err.message);
    process.exit(1);
  }
};

export default mongooseConnection;
