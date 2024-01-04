const user = require("../models/user")

async function getAllUser(req, res) {
    const allDbUsers = await user.find({});
    return res.json(allDbUsers);
}

async function getUserById(req, res) {
    const userData = await user.findOne({_id: req.params.id});
    return res.json(userData);
}

async function deleteUserById(req, res) {
    try {
        const result = await user.deleteOne({_id: req.params.id});
        if (result.deletedCount === 1) {
            res.json({ success: true, message: 'Document deleted successfully' });
          } else {
            res.status(404).json({ success: false, message: 'Document not found or not deleted' });
          }
        return res.json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }   
}

async function createUser(req, res) {
    const body = req.body;
    try 
    {
      const result = await user.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        jobTitle: body.jobTitle,
        gender: body.gender
    }); 
    return res.status(201).json(result);
} catch (error) {
    console.error("Error creating user", error);
    return res.status(500).json({ error: 'Internal Server Error' }); // Handle error
  }
}

module.exports = {
    getAllUser,
    createUser,
    getUserById,
    deleteUserById
}