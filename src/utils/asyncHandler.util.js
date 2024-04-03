//TODO: USING PROMISE
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {Promise
    .resolve(requestHandler(req, res, next))
    .catch((error) => next(error));
  };
};

/* TODO: USING ASYNC-AWAIT
// const asyncHandler2 = (fn) => async {() => {}}
const asyncHandler2 = (requestHandler) => async (req, res, next) => {
  try {
    await requestHandler(req, res, next);
  } catch (error) {
    res.status(error.code || 500).json({
      success: false,
      message: error.message || "Internal Server Error",
    })
    next(error)
  }
}
*/

export { asyncHandler };