import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import MyApp from '../MyApp';

test('demo', () => {
  expect(true).toBe(true);
});

test('Renders the main page', () => {
  render(<MyApp />);
  expect(true).toBeTruthy();
});
