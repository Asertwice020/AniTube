class ApiError extends Error {
  constructor(
    message = 'API ERROR HAPPENED',
    errors = [],
    statusCode = 500,
    stack = ''
    ) {
    super(message)
    this.message = message
    this.errors = errors
    this.statusCode = statusCode
    this.data = null
    this.success = false

    if(stack) {
      this.stack = stack
    }
    else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

export {ApiError}

  /**
   * Creates a new instance of the APIError class.
   *
   * @param {string} message - The error message (default: 'API ERROR HAPPENED')
   * @param {Array} errors - An array of errors (default: [])
   * @param {number} statusCode - The statusCode code (default: 500)
   * @param {string} stack - The stack trace (default: '')
   */