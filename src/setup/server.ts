import app from "./expressApp";
import dotenv from 'dotenv';
import { connectMongoDB } from "@infrastructure/database";
import { connectRedis } from "./redisClient";

dotenv.config();

const PORT = process.env.PORT || 5000;

async function startServer() {
    try {
        await connectMongoDB();
        await connectRedis();

        app.listen(PORT, () => {
            console.log(`✅ Server running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("❌ Server startup failed:", error);
        process.exit(1); 
    }
}

startServer();
