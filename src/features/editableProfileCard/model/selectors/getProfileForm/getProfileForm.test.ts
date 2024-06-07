import { StateScheme } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

describe('getProfileForm', () => {


  test('should work with filled state', () => {
    const data = {
      first: 'TestFirstName',
      lastname: 'TestLastName',
      username: 'testname',
      city: 'TestCity',
      country: Country.Russia,
      currency: Currency.RUB,
      age: 11
    };

    const state: DeepPartial<StateScheme> = {
      profile: {
        form: data
      }
    };

    expect(getProfileForm(state as StateScheme)).toEqual(data);
  });

  test('should work with empty state', () => {

    const state: DeepPartial<StateScheme> = {};

    expect(getProfileForm(state as StateScheme)).toEqual(undefined);
  });
});