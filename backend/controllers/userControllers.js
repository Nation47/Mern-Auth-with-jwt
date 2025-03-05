import asyncHandler from "express-async-handler";

// auth user / set Token
// route POST/api/users/auth
// access public

const userAuth = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Auth User'})
});

export { userAuth };