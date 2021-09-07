export function handleResponse(response) {
  if (response && response.status === 200) {
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
