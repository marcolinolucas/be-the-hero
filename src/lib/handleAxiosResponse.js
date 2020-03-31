function responseHandler(res) {
  return res.data;
}

function errorHandler({ response }) {
  if (response && response.data) throw response.data.error;
  throw response;
}

export {
  errorHandler,
  responseHandler
};
