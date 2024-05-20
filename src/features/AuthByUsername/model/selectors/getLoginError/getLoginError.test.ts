import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
  test('should return error', () => {

    const state: Partial<StateScheme> = {
      loginForm: {
        username: '',
        password: '',
        error: 'error'
      }
    };

    expect(getLoginError(state as StateScheme)).toEqual('error');
  });

  test('should return with empty', () => {

    const state: Partial<StateScheme> = {};

    expect(getLoginError(state as StateScheme)).toEqual(undefined);
  });
});