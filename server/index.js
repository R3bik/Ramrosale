const app = require("./app");

const connectDatabase = require("./db/Database");

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// connect db
connectDatabase();

// create server
const PORT = process.env.PORT; // Default to port 3000 if process.env.PORT is not defined

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
