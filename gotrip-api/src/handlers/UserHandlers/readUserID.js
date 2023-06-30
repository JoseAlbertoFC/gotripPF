const { readUserID } = require("../../controllers/UserControllers/readUserID")

// Porfa crea un archivo para cada handler
const readallUserID = async (req, res) => {
    const userID = req.params.id



    try {


        const result = await readUserID(userID);

        if (result.length === 0) return res.status(404).json({ menssage: "Lo siento No existe ningun usuario" })

        res.status(200).json(result);


    } catch (error) {
        res.status(400).json({ message: error.message })

    }
}

module.exports = { readallUserID }