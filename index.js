// index.js
const express = require("express");
const { AppDataSource } = require("./data-source");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Database connected");

    // Register routes
    app.use("/users", userRoutes);

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error during Data Source initialization", error);
  });
