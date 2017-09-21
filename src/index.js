let target;

switch (process.env.TEST_TARGET) {
  case "react":
    target = Object.assign({}, require("react"), require("react-dom"));
    break;
  default:
    target = require(process.env.TEST_TARGET);
}

module.exports = target;
