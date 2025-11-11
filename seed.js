import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./src/models/User.js";
import Post from "./src/models/Post.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/graphql-basic";
console.log("Mongo URI: ", process,env.MONGO_URI)

const users = [
  {
    name: "Ammar Ahmed",
    email: "ammar@example.com",
  },
  {
    name: "Sufyan Malik",
    email: "sufyan@example.com",
  },
  {
    name: "Haris Raees",
    email: "haris@example.com",
  },
  {
    name: "Fatima Noor",
    email: "fatima@example.com",
  },
  {
    name: "Ali Khan",
    email: "ali@example.com",
  },
];

const posts = [
  {
    title: "GraphQL is Awesome!",
    content: "Learning GraphQL with Apollo Server has been fun.",
  },
  {
    title: "Building REST APIs with Express",
    content: "Express.js is simple yet powerful for backend apps.",
  },
  {
    title: "Next.js and TypeScript Combo",
    content: "Type safety + React = ❤️ with Next.js and TypeScript.",
  },
  {
    title: "Deploying to Vercel",
    content: "Vercel makes deploying fullstack apps effortless.",
  },
  {
    title: "Understanding MongoDB Aggregations",
    content: "Aggregations in MongoDB are like SQL GROUP BY on steroids.",
  },
];

const seedData = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");

    await User.deleteMany({});
    await Post.deleteMany({});
    console.log("🧹 Cleared existing collections");

    const createdUsers = await User.insertMany(users);
    console.log(`👥 Inserted ${createdUsers.length} users`);

    const postDocs = posts.map((p) => ({
      title: p.title,
      content: p.content,
    }));

    await Post.insertMany(postDocs);
    console.log("📝 Inserted posts successfully");

    console.log("✅ Seeding completed!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding database:", err);
    process.exit(1);
  }
};

seedData();
