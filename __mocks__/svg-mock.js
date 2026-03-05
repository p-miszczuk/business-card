const React = require("react");
module.exports = function MockSvg(props) {
  return React.createElement("svg", { "data-testid": "mock-svg", ...props });
};
