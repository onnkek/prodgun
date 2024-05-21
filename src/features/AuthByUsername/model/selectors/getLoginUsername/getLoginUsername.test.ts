import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
  test('should return error', () => {

    const state: DeepPartial<StateScheme> = {
      loginForm: {
        username: 'admin',
        password: '',
      }
    };

    expect(getLoginUsername(state as StateScheme)).toEqual('admin');
  });

  test('should return with empty', () => {

    const state: DeepPartial<StateScheme> = {};

    expect(getLoginUsername(state as StateScheme)).toEqual('');
  });
});