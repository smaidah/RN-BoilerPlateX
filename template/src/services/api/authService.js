import { apiClient } from './index';
import ApiConstants from '../../constants/ApiConstants';
import { handleError, handleResponse } from './responseHandler';

export const login = async (model) => {
  try {
    // const response = await apiClient().post(ApiConstants.LOGIN, model);
    const dummyResponse = {
      status: 200,
      data: {
        token: 'Dummy Token',
      },
    };
    return handleResponse(dummyResponse);
  } catch (error) {
    throw handleError(error);
  }
};

export default { login };
