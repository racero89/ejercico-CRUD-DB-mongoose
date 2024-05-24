const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;
const connectionString =
  "mongodb+srv://Monica:Pulido89.@cluster0.xmanu0v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.json());

try {
  mongoose.connect(connectionString);
} catch (error) {
  console.log("fallo al conectar");
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log("Conexión errónea", err));
dbConnection.once("open", () => console.log("Mongo está conectado!!"));

app.listen(PORT, () => {
  console.log(`Servidor escuchando puerto ${PORT}`);
});
