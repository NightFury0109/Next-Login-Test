import mongoose from 'mongoose';
import config from '../config/default.json';

// connecting to database
const DBconnection = async () => {
    // const connectionUrl = process.env.DB_URI;
    const connectionUrl = config.mongoURI;
    mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log(`Database connected successfully`))
        .catch((err) => console.log("Getting Error from DB connection" + err.message))
    mongoose.set('strictQuery', false);
};

export default DBconnection;