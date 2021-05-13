class AppError extends Error {
    constructor(message, status) {
      super();
      Error.captureStackTrace(this, this.constructor);
      this.name = this.constructor.name;
      this.message = message || 'Try again. Smth is wrong';
      this.status = status || 500;
    }
  }
  
  export default AppError;