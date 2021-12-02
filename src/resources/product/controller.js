const prisma = require("../../utils/database")

const getAllProducts = async (req, res) => {
    try {
        const result = await prisma.product.findMany()
        res.json([data = result])
    } catch (error) {
        console.error({ error: error.message })
        res.status(500).json({ error: error.message })
    }
}

module.exports = { getAllProducts }