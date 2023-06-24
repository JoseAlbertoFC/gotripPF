const {roomDelete} = require("../../controllers/RoomsControllers/indexControlers.js")

const deleteRooms = async (req, res) => {
    const { idRoom } = req.params;

    try {
      const result = await roomDelete(idRoom);
      if (result === 0) return res.status(400).json("This Rooms  was not deleted correctly");
      res.status(200).json("This Romms was successfully removed");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}

module.exports ={
    deleteRooms
}