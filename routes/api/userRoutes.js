const router = require('express').Router();

//all user related controllers
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

//api/users routes
router.route('/').get(getAllUsers).post(createUser);

//api/users/:id routes
router.route('/:id').get(getUserById).put(updateUserById).delete(deleteUserById);

//api/users/:userid/friends/friendID routes
router.route('/:userID/frineds/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;
