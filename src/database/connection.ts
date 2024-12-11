import mongoose from "mongoose";

class Connection {
    private readonly uri: string;

    constructor() {
        this.uri = process.env.MONGO_URI ? process.env.MONGO_URI : "";
    }

    async connect() {
        try {
            if (mongoose.connection.readyState === mongoose.ConnectionStates.connected) {
                return console.log("Database is already connected");
            }
            await mongoose.connect(this.uri);
            console.log("Database connected successfully");
        } catch (error) {
            console.error("Database connection failed");
        }
    }
    async disconnect() {
        try {
            if (mongoose.connection.readyState !== mongoose.ConnectionStates.connected) {
                return console.log("Database is already disconnected");
            }
            await mongoose.disconnect();
            console.log("Database disconnected successfully");
        } catch (error) {
            console.error("Database disconnection failed");
        }
    }
}