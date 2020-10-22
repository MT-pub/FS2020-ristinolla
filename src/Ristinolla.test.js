import React from 'react';
import { render } from '@testing-library/react';
import Ristinolla from './Ristinolla';

test('renders learn react link', () => {
  const { getByText } = render(<Ristinolla />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
