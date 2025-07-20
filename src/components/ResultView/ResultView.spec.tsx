import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ResultView, type Person } from './ResultView';

const mockData: Person[] = [
  {
    uid: '1',
    properties: {
      name: 'Luke Skywalker',
      birth_year: '19BBY',
      gender: 'male',
      height: '172',
      mass: '77',
      hair_color: 'blond',
      eye_color: 'blue',
    },
  },
  {
    uid: '2',
    properties: {
      name: 'Anakin Skywalker',
      birth_year: '41.9BBY',
      gender: 'male',
      height: '188',
      mass: '84',
      hair_color: 'blond',
      eye_color: 'blue',
    },
  },
];

describe('ResultView', () => {
  it('displays "no result found" message when data array is empty', () => {
    render(<ResultView data={[]} />);

    expect(screen.getByText('No result found')).toBeTruthy();
    expect(screen.queryByRole('table')).toBeNull();
  });

  it('should display data', () => {
    render(<ResultView data={mockData} />);

    expect(screen.getByText('Name')).toBeTruthy();
    expect(screen.getByText('Description')).toBeTruthy();

    expect(screen.getByText('Luke Skywalker')).toBeTruthy();
  });
});
