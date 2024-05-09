import express from "express";
import routes from "./routes";

const app = express();

// Adicione os middleares aqui

// Define como padrão de comunicação JSON
app.use(express.json());

// Use as rotas definidas no routes.ts
app.use(routes);

const PORT = 3333;

// Inicia o server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
