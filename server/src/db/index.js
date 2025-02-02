const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected || Host ==>', connection.connection.host);
    } catch (error) {
        console.log('MONGODB connection error ', error);
        process.exit(1);
    }
};

module.exports = connectDB
