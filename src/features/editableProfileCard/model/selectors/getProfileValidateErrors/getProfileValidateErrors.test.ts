import { StateScheme } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../consts/consts';

describe('getProfileValidateErrors', () => {

  test('should work with filled state', () => {
    const validateErrors = [
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.INCORRECT_AGE,
    ];

    const state: DeepPartial<StateScheme> = {
      profile: {
        validateErrors
      }
    };

    expect(getProfileValidateErrors(state as StateScheme)).toEqual(validateErrors);
  });

  test('should work with empty state', () => {

    const state: DeepPartial<StateScheme> = {};

    expect(getProfileValidateErrors(state as StateScheme)).toEqual(undefined);
  });
});