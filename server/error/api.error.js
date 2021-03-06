const badRequest = (msg) => {
  return {
    code: 400,
    message: msg,
  };
};

const internal = (msg) => {
  return {
    code: 500,
    message: msg,
  };
};

module.exports = {
  badRequest,
  internal,
};
