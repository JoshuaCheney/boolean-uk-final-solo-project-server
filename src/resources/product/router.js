const express = require("express")
const { getAllProducts } = require("./controller")

const router = express.Router()

router.get("/", getAllProducts)

module.exports = router