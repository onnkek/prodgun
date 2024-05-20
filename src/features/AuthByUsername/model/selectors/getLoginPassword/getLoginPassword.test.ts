import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  test('should return error', () => {

    const state: Partial<StateScheme> = {
      loginForm: {
        username: '',
        password: '123123'
      }
    };

    expect(getLoginPassword(state as StateScheme)).toEqual('123123');
  });

  test('should return with empty', () => {

    const state: Partial<StateScheme> = {};

    expect(getLoginPassword(state as StateScheme)).toEqual('');
  });
});