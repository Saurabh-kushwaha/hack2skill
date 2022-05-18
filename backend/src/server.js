const app = require("./index");
const connect = require("./config/db");

const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
  await connect();
  console.log("Server is running on port 8000");
});