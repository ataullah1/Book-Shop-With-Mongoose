import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import app from "./app";

async function main() {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not defined in environment variables");
    }

    await mongoose.connect(process.env.DATABASE_URL);
    console.log("🛢 Database connection successful");

    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to database:", error);
    process.exit(1);
  }
}

process.on("unhandledRejection", (error) => {
  console.log("UnhandledRejection:", error);
  process.exit(1);
});

main();
