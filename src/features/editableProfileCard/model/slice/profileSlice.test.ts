import { Country } from 'entities/Country';
import { profileActions, profileReducer } from './profileSlice';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileScheme, ValidateProfileError } from '../types/editableProfileCardScheme';

const data = {
  first: 'TestFirstName',
  lastname: 'TestLastName',
  username: 'testname',
  city: 'TestCity',
  country: Country.Russia,
  currency: Currency.RUB,
  age: 11
};

describe('profileSlice', () => {

  test('test set readonly', async () => {
    const state: DeepPartial<ProfileScheme> = { readonly: false };
    expect(profileReducer(
      state as ProfileScheme,
      profileActions.setReadonly(true)
    )).toEqual({ readonly: true });
  });

  test('test cancel edit', async () => {
    const state: DeepPartial<ProfileScheme> = { data, form: { username: '' } };
    expect(profileReducer(
      state as ProfileScheme,
      profileActions.cancelEdit(),
    )).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test('test update profile', async () => {
    const state: DeepPartial<ProfileScheme> = { form: { username: '' } };
    expect(profileReducer(
      state as ProfileScheme,
      profileActions.updateProfile({
        username: 'Test',
      }),
    )).toEqual({
      form: { username: 'Test' },
    });
  });

  test('test update profile service pending', async () => {
    const state: DeepPartial<ProfileScheme> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR]
    };
    expect(profileReducer(
      state as ProfileScheme,
      updateProfileData.pending(''),
    )).toEqual({
      isLoading: true,
      validateErrors: undefined
    });
  });

  test('test update profile service fulfilled', async () => {
    const state: DeepPartial<ProfileScheme> = {
      isLoading: true,
      validateErrors: [ValidateProfileError.SERVER_ERROR]
    };
    expect(profileReducer(
      state as ProfileScheme,
      updateProfileData.fulfilled(data, ''),
    )).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      form: data,
      data
    });
  });

});