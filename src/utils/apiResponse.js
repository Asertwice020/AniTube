class ApiResponse {
  constructor (
    data = null,
    message = '',
    status = 200
  ) {
    this.data = data
    this.status = status
    this.message = message
    this.success = status < 400
  }
}