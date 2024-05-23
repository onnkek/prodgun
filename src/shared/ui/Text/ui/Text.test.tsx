import { render, screen } from '@testing-library/react';
import { Text, TextAlign, TextTheme } from './Text';

describe('Text', () => {
  test('Test render title', () => {
    render(<Text title='Test title' />);
    expect(screen.getByTestId('text')).toBeInTheDocument();
  });

  test('Test render text', () => {
    render(<Text text='Test text' />);
    expect(screen.getByTestId('text')).toBeInTheDocument();
  });

  test('Test error theme', () => {
    render(<Text title='Test title' theme={TextTheme.ERROR} />);
    expect(screen.getByTestId('text')).toHaveClass('error');
  });

  test('Test align center', () => {
    render(<Text title='Test title' align={TextAlign.CENTER} />);
    expect(screen.getByTestId('text')).toHaveClass('center');
  });

  test('Test align right', () => {
    render(<Text title='Test title' align={TextAlign.RIGHT} />);
    expect(screen.getByTestId('text')).toHaveClass('right');
  });

  test('Test align left', () => {
    render(<Text title='Test title' align={TextAlign.LEFT} />);
    expect(screen.getByTestId('text')).toHaveClass('left');
  });
});