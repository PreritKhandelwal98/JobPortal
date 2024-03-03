import userModel from "../models/userModel.js";

export const updateUserController = async (req, resp, next) => {
    const { name, email, lastName, location } = req.body
    if (!name || !email || !lastName || !location) {
        next('Please Provide All Fields');
    }
    const user = await userModel.findOne({ _id: req.user.userId })
    user.name = name
    user.lastName = lastName
    user.email = email
    user.location = location

    await user.save();

    const token = user.createJWT()
    resp.status(200).json({
        user,
        token
    });
}

//get user data
export const getUserController = async (req, resp, next) => {
    try {
        const user = await userModel.findById({ _id: req.body.user.userId })
        user.password = undefined
        if (!user) {
            resp.status(200).send({
                message: "User Not Found",
                success: false
            })
        } else {
            resp.status(200).send({
                message: true,
                data: user
            })
        }
    } catch (error) {
        console.log(err);
        resp.status(500).send({
            success: false,
            message: 'auth error',
            error: err.message
        })
    }
}