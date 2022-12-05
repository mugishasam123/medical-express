import Jwt from "jsonwebtoken";

export default function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  Jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    console.log(err.message);
    if (err) return res.status(403).send({ error: err.message });
    req.user = user;
    next();
  });
}
