const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const makeConn = require("./database/db");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const pokeRoutes = require("./routes/pokeRoutes");

// Adding cors to allow angular web connetion
app.options("*", cors());
app.use(express.json({limit: '100mb'}));
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", cors(), (req, res) => {
  res.json({ message: "ok" });
});
makeConn();

app.use((err, req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

// Define Routes
app.use("/api/users", cors(), userRoutes);
app.use("/api/pokemons", cors(), pokeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
