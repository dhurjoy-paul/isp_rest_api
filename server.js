import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { sessionMiddle } from "./config/session.js";
import authRoutes from "./routes/authRoutes.js";
import clientRouter from "./routes/clientRoutes.js";
import clientsRouter from "./routes/clientsRoutes.js";
import packageRouter from "./routes/packageRoutes.js";
import protectedRoutes from "./routes/protectedRoutes.js";
import regRoutes from "./routes/regRoutes.js";
dotenv.config();

const app = express();
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'https://localhost:5173',
    'https://localhost:5174',
  ],
  credentials: true,
}
app.use(cors(corsOptions))
app.use(express.json());
app.use(sessionMiddle);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello, World!"));

// auth routes
app.use("/auth", authRoutes);
app.use("/auth", regRoutes);

// userGet and userUpdate
app.use("/", protectedRoutes);

// clients routes
app.use("/clients", clientsRouter);

// client routes
app.use("/client", clientRouter);

// package routes
app.use("/package", packageRouter);

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
