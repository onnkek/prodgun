import { screen, fireEvent } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';


describe('Counter', () => {

  test('test render', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('test render', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    });

    fireEvent.click(screen.getByTestId('increment-btn'));

    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('test render', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    });

    fireEvent.click(screen.getByTestId('decrement-btn'));

    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });

});