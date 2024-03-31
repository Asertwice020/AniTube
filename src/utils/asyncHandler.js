// TODO: USING ASYNC-AWAIT
// const asyncHandler = (fn) => async {() => {}}
const asyncHandler = (requestHandler) => async (req, res, next) => {
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

/* TODO: USING PROMISE
const asyncHandler2 = (requestHandler) => {
  (req, res, next) => {
    return Promise
    .then(requestHandler(req, res, next))
    .catch(error => next(error))
  }
}
*/

export {asyncHandler}