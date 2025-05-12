import "./src/envConfig.js"; //First, the environment variables must be loaded
import server from './src/app.js';
import mongooseConnection from './src/db.js';


const port = process.env.MONGO_USER || 8080;


mongooseConnection();


server.listen(port, () => {
    console.log('Listening on port' + port);
});
