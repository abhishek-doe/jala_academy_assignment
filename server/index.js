const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 2301
const cors = require("cors")
const connectDB = require("./config/DbConnection");

connectDB();
app.use(cors())
app.use(express.json())
app.use("/employee", require("./routes/employee"));
app.use("/image", require("./routes/photo"))
app.use(express.static('public'))


app.listen(PORT, (req, res) => {
  console.log(`Server running on port ${PORT}`);
});
