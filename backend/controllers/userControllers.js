import asyncHandler from "express-async-handler";

// @description userAuth/set Token // route POST/api/users/auth // @access public

const userAuth = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Auth User'})
});

// @description register user // route POST/api/users/auth // @access public
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Register User'})
});

// @description logout user // route POST/api/users/logout // @access public
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Logout User'})
});

// @description userProfile // route GET/api/users/profile // @access private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'User profile'})
});

// @description update userProfile // route PUT/api/users/profile // @access private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Update User profile'})
});

export { 
    userAuth,
    updateUserProfile,
    getUserProfile,
    logoutUser,
    registerUser
};