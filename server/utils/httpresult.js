const fail = (res, err) => {
  let { url, params, body } = res.req;
  let { message } = err;
  let statusCode = err.statusCode || 400;
  res.status(statusCode).send(message);
};

const success = (res, data, extra = 0) => {
  let message = {};
  if (extra) {
    message = extra;
  }
  message.status = 0;
  message.data = data;
  res.status(200).json(message);
};

module.exports = { success, fail };
