import express from "express";
import routes from "./routes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);
const PORT = 3333;

// Inicia o server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
