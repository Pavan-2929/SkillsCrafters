export const adminMiddleware = async (req, res, next) => {
  try {

    const isAdminValid = req.user.isAdmin
    console.log(isAdminValid);

    if(!isAdminValid){
        return res.status(400).json("You are not Admin")
    }
    next()
    
  } catch (error) {
    console.log(error);
  }
};
