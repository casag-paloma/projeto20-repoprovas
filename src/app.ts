import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import { errorHandler } from "./middlewares/errorHandlerMiddleware";

const app = express();
app.use(json());
app.use(cors());
app.use(errorHandler);

export default app;