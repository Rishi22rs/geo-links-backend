const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 6699;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("i am runnin");
});

// app.use("/api", require("./routes/auth.js"));
// app.use("/api", require("./routes/links.js"));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
