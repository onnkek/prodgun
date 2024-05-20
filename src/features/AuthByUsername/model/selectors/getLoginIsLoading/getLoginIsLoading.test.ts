import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
  test('should return error', () => {

    const state: Partial<StateScheme> = {
      loginForm: {
        username: '',
        password: '',
        isLoading: true
      }
    };

    expect(getLoginIsLoading(state as StateScheme)).toEqual(true);
  });

  test('should return with empty', () => {

    const state: Partial<StateScheme> = {};

    expect(getLoginIsLoading(state as StateScheme)).toEqual(false);
  });
});