import { StateScheme } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  
  const state: DeepPartial<StateScheme> = {
    counter: { value: 10 },
  };

  test('', () => {
    expect(getCounterValue(state as StateScheme)).toEqual(10);
  });

});