const express = require('express')
const app = express()
const productRouter = require("./src/routers/product.route")
const port = 3000;

//app.use(express.urlencoded());
app.use(express.json());

app.set("views", "ejs");
app.set("views", "views");


app.use(productRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})