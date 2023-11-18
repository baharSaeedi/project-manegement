const bcrypt = require("bcrypt");

function hashString(sting) {
  const salt = bcrypt.genSaltSync(10);

  return bcrypt.hashSync(sting, salt);
}

module.exports = {
  hashString,
};
