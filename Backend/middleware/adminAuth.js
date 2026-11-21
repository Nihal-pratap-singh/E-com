import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  console.log("yaaha aaya")
  try {
    const authHeader = req.headers.authorization; // ✅ MUST BE 'authorization'
    console.log(req.headers, "this is headers")
    if (!authHeader) {
      return res.json({ success: false, message: "Not Authorized - Login Again 1" });
    }

    const token = authHeader.split(" ")[1]; // ✅ 'Bearer <token>'

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // if (decoded.role !== "admin" || decoded.email !== process.env.ADMIN_EMAIL) {
    //   return res.json({ success: false, message: "Not Authorized - Login Again 2" });
    // }

    next();

  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export default adminAuth;
