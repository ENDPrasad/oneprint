import dotenv from "dotenv";
import express from "express";
import router from "./routes/public/printLinks.js";
import cors from "cors";

dotenv.config({ path: [".env"] });
const PORT = process.env.PORT;

const app = express();

app.use(cors());

app.use(express.json());

app.use("/oneprint", router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
