import asyncHandler from "express-async-handler";
import User from "../model/userModel.js";
import generateToken from "../utils/generateTokens.js";

// @description userAuth/set Token // route POST/api/users/auth // @access public

const userAuth = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Auth User'})
});

// @description register user // route POST/api/users // @access public
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password } = req.body;
    
    // to check if user exists
    const userExists = await User.findOne({email});

    if(userExists) {
        res.status(400);
        throw new Error('User already exists')
    }

    // if not  
    const user = await User.create({
        name,
        email,
        password
    });

    if(user) {
        generateToken(res, user.id)
        res.status(201).json({
            id: user.id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data')
    }

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