const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function hashString(sting) {
  const salt = bcrypt.genSaltSync(10);

  return bcrypt.hashSync(sting, salt);
}

function checkHashString(string, hash) {
  return bcrypt.compareSync(string, hash);
}

function jwtTokenGenerator(payload) {
  const token = jwt.sign(payload, process.env.SECRET_JWT, {
    expiresIn: "3 days",
  });

  return token;
}

function jwtTokenVerifier(token) {
  const verify = jwt.verify(token, process.env.SECRET_JWT);
  if (!verify?.userId) throw { status: 401, message: "UnAthorized!" };
  return verify;
}

module.exports = {
  hashString,
  checkHashString,
  jwtTokenGenerator,
  jwtTokenVerifier,
};
