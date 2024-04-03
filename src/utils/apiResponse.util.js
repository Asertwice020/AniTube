class ApiResponse {
  constructor (
    data = null,
    message = 'success',
    statusCode = 200
  ) {
    this.data = data
    this.statusCode = statusCode
    this.message = message
    this.success = statusCode < 400
  }
}