import { STATUS_CODES } from '../../constants/HttpStatusCodes';

export function handleResponse(response) {
  if (response && response.status === STATUS_CODES.OK) {
    return response.data;
  } else {
    handleError(response);
  }
}

export function handleError(error) {
  let errorMessage = '';

  if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'Network error';
  }

  throw errorMessage;
}
