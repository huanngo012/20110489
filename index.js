const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const PORT = 5000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Lỗi!");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
