import express from "express";
import router from "./user/userRoutes.js";

const port = 3001;
const app = express();
app.use(express.json());
app.use(router);
process.stdout.write(`Server is running on port ${port} \n`);
app.listen(port);
