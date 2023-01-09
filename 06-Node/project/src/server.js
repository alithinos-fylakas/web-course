const port = 3003

const express = require("express")
const app = express()
/*
app.get("/produtcts", (req, res, next) => {
    console.log("Middleware 1...")
    next()
})
*/
app.get("/products", (req, ans, next) => {
    ans.send( { name: "Notebook", price: 1234.99} ) //Converts to JSON
})

app.listen(port, () => {
    console.log(`Server is executing on port ${port}.`)
})