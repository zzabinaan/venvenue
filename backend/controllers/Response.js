export const responseSuccess = (status, message, res) => {
  res.status(status).json({
    status,
    message,
  });
};

export const responseSuccessWithData = (status, message, data, res) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const responseFailed = (status, message, res) => {
  res.status(status).json({
    status,
    message,
  });
};
