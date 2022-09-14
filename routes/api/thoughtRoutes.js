const router = require('express').Router();

// all thought related controllers
const {
    getAllThoughts,
    getThoughtsById,
    createThoughts,
    updateThoughtsById,
    deleteThoughtsById,
    createReaction,
    deleteReactionbyId
} = require('../../controllers/thoughtController');

//api/thoughts routes
router.route('/').get(getAllThoughts).post(createThoughts);

//api/thoughts/:id routes
router.route('/:id').get(getThoughtsById).put(updateThoughtsById).delete(deleteThoughtsById);

//api/thoughts/:thoughtID/reactions routes
router.route('/:thoughtId/reactions').post(createReaction);

//api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReactionbyId);

module.exports = router;
