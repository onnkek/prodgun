import { StateScheme } from 'app/providers/StoreProvider';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './getArticleDetails';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

describe('getArticleDetails', () => {


  test('should return data', () => {
    const data = {
      id: '1',
      title: 'Title'
    };
    const state: DeepPartial<StateScheme> = {
      articleDetails: {
        data
      }
    };

    expect(getArticleDetailsData(state as StateScheme)).toEqual(data);
  });

  test('should work with empty state', () => {

    const state: DeepPartial<StateScheme> = {};

    expect(getArticleDetailsData(state as StateScheme)).toEqual(undefined);
  });

  test('should return data', () => {

    const state: DeepPartial<StateScheme> = {
      articleDetails: {
        isLoading: true
      }
    };

    expect(getArticleDetailsIsLoading(state as StateScheme)).toEqual(true);
  });

  test('should work with empty state', () => {

    const state: DeepPartial<StateScheme> = {};

    expect(getArticleDetailsIsLoading(state as StateScheme)).toEqual(false);
  });

  test('should return data', () => {

    const state: DeepPartial<StateScheme> = {
      articleDetails: {
        error: 'Error'
      }
    };

    expect(getArticleDetailsError(state as StateScheme)).toEqual('Error');
  });

  test('should work with empty state', () => {

    const state: DeepPartial<StateScheme> = {};

    expect(getArticleDetailsError(state as StateScheme)).toEqual(undefined);
  });

});