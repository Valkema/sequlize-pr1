import AppError from './AppError';

class ForbiddenError extends AppError {
  constructor(message) {
    sumer(message, 403);
  }
}
export default ForbiddenError;