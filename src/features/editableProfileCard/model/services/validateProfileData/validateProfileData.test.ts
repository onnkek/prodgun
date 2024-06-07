import { Country } from 'entities/Country';
import { validateProfileData } from './validateProfileData';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/editableProfileCardScheme';

const data = {
  first: 'TestFirstName',
  lastname: 'TestLastName',
  username: 'testname',
  city: 'TestCity',
  country: Country.Russia,
  currency: Currency.RUB,
  age: 11
};

describe('validateProfileData', () => {

  test('validate correct data', async () => {

    const result = validateProfileData(data);
    expect(result).toEqual([]);

  });

  test('validate without first and last names', async () => {

    const result = validateProfileData({
      ...data,
      first: '',
      lastname: '',
    });
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);

  });

  test('validate without incorrect age', async () => {

    const result = validateProfileData({
      ...data,
      age: undefined,
    });
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);

  });

  test('validate without country', async () => {

    const result = validateProfileData({
      ...data,
      country: undefined,
    });
    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);

  });

  test('validate without country', async () => {

    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);

  });

});