import JWT from "jsonwebtoken";

const userAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log("Authorization header:", authHeader); // Log the value of the authorization header

    if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(401).json({ error: "Authorization header missing or invalid" });
    }

    const token = authHeader.split(" ")[1];
    try {
        const payload = JWT.verify(token, process.env.JWT_SECRET);
        req.user = { userId: payload.userId };
        next();
    } catch (error) {
        return res.status(401).json({ error: "Authentication failed" });
    }
};

export default userAuth;
