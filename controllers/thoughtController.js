const { User, Thought } = require('../models');

const thoughtController = {
    //get all thoughts
    getAllThoughts(req, res) {

        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err))
    },

    //get single thought by Id
    getThoughtsById(req, res) {
        Thought.findOne({ _id: req.params.id })
            .select('-__v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought found with given ID' })
                    : res.json(thought))
            .catch((err) => res.status(500).json(err));
    },

    //create a thought and update the thought to corresponding user
    createThoughts(req, res) {
        Thought.create({ thoughtText: req.body.thoughtText, username: req.body.username })
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                );
            })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'no user found with the id' })
                    : res.json(thought))
            .catch((err) => res.status(500).json(err));
    },

    //delete a thought
    deleteThoughtsById(req, res) {
        Thought.findOneAndDelete({ _id: req.params.id })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought found with given Id' })
                    : User.findOneAndUpdate(
                        { _id: req.body.userId },
                        { $pull: { thoughts: req.params.id } },
                        { new: true }))
                        .then(() => res.json(({ message: "thought deleted" })))

                        .catch((err) => res.status(500).json(err));
    },

    //update thought by id
    updateThoughtsById(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought found with given Id' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    //create reaction
    createReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $push: { reactions: req.body } },
            { new: true })
            .then((reaction) => res.json(reaction))
            .catch((err) => res.status(400).json(err));
    },

    //delete a reaction
    deleteReactionById(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { _id: req.params.reactionId } } },
            { new: true })
            .then((reaction) => res.json(reaction))
            .catch((err) => res.status(400).json(err));
    }
}

module.exports = thoughtController;