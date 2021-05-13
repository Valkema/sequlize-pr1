import AppError from './AppError';

class BadRequestError extends AppError {
  constructor(message) {
    sumer(message, 400);
  }
}
export default BadRequestError;