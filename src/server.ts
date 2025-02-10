import mongoose from "mongoose";
import app from "./app";

const port = process.env.PORT || 5000;
const dbUrl = process.env.DATABASE_URL || "mongodb://localhost:27017/book-shop";

async function main() {
  try {
    await mongoose.connect(dbUrl);
    console.log("🛢 Database connection successful ");

    app.listen(port, () => {
      console.log(`✅ Server is running on port ${port}`);
    });
  } catch (err) {
    console.log("❌ Failed to connect database", err);
  }
}

main();
