const { countReset } = require('console');
const { User, Thought } = require('../models');

const userController = {
    //get all users
    getAllUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    //get single user by Id
    getUserById(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user found with given ID' })
                    : res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    //create a user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    //delete a user
    deleteUserById(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user found with given Id' })
                    : Thought.deleteMany({ _id: { $in: user.thought } }))
            .then(() => res.json(({ message: 'User and associated thoughts deleted' })))
            .catch((err) => res.status(500).json(err));
    },

    //update user by id
    updateUserById(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user found with given Id' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    //add a friend
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $push: { friends: params.friendId } },
            { new: true, runValidators: true })
            .then((friend) => res.json(friend))
            .catch((err) => res.status(400).json(err));
    },

    //delete a friend
    deleteFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: params.friendId } },
            { runValidators: true, new: true })
            .then((friend) => res.json(friend))
            .catch((err) => res.status(400).json(err));
    }
}

module.exports = userController;