import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from './Header';

describe('<Header />', () => {
  it('It should mount', () => {
    const { container, getByText } = render(<Header />)
    expect(getByText('Satterfield Dashboard')).toBeInTheDocument()
  });
});
