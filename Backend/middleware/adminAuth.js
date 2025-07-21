import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization; // ✅ MUST BE 'authorization'

    if (!authHeader) {
      return res.json({ success: false, message: "Not Authorized - Login Again" });
    }

    const token = authHeader.split(" ")[1]; // ✅ 'Bearer <token>'

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "admin" || decoded.email !== process.env.ADMIN_EMAIL) {
      return res.json({ success: false, message: "Not Authorized - Login Again" });
    }

    next();

  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export default adminAuth;
