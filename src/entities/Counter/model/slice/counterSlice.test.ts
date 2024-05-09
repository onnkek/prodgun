import { counterActions, counterReducer } from './counterSlice';
import { CounterScheme } from '../types/counterScheme';

describe('counterSlice', () => {

  test('increment', () => {

    const state: CounterScheme = { value: 10 };

    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
  });

  test('decrement', () => {

    const state: CounterScheme = { value: 10 };

    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
  });

  test('should work with empty', () => {

    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });

});