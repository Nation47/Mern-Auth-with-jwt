// auth user / set Token
// route POST/api/users/auth
// access public

const userAuth = (req, res) => {
    res.status(200).json({message: 'Auth User'})
};

export { userAuth };