const { jwtTokenVerifier } = require("../../modules/function");

const checkAuth = (req, res, next) => {
  const Authorization = req?.headers?.authorization;
  if (!Authorization) throw { status: 401, message: "UnAthorized!" };
  const token = Authorization.split(" ")[1];
  if (!token) throw { status: 401, message: "UnAthorized!" };
  const verifyToken = jwtTokenVerifier(token);
  if (!verifyToken) throw { status: 401, message: "UnAthorized!" };
  req.user = { userId: verifyToken?.userId };
  next();
};

module.exports = {
  checkAuth,
};
