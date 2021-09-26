require("dotenv").config();

//-----------------------------------------------//

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes/routes"));

//-----------------------------------------------//

const port = process.env.PORT;
app.listen(port, () => console.log(`Puerto: ${port}`));