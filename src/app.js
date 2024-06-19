import express from "express";
import booksRouter from "./routes/books.routes.js";
import cors from 'cors';
import categoryRouter from "./routes/category.routes.js";

const app = express();

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));
app.use(cors());
app.use('/api/books', booksRouter);
app.use('/api/category', categoryRouter);

app.post("/test", async (req, res) => {
    console.log(req.body);
    res.status(500).json({ message: "test return" });
});


export default app;