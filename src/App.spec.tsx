import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import type { Person } from './components/ResultView/ResultView';

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
];

describe('App', () => {
  beforeEach(() => {
    localStorage.clear();

    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData),
        })
      )
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should render initial state', () => {
    waitFor(() => {
      render(<App />);
    });

    expect(screen.getByPlaceholderText('Search')).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Search' })).toBeTruthy();
  });

  it('should save query to localStorage on search', async () => {
    waitFor(() => {
      render(<App />);
    });
    const input = screen.getByPlaceholderText('Search');

    waitFor(() => {
      fireEvent.change(input, { target: { value: 'Luke' } });
      fireEvent.click(screen.getByRole('button', { name: 'Search' }));
    });

    waitFor(() => {
      expect(localStorage.getItem('swapiPeopleSearch')).toBe('Luke');
    });
  });

  it('should search and display results', async () => {
    render(<App />);

    const input = screen.getByPlaceholderText('Search');
    const button = screen.getByRole('button', { name: 'Search' });

    waitFor(() => {
      fireEvent.change(input, { target: { value: 'Luke' } });
      fireEvent.click(button);
    });

    expect(screen.getByText('Loading...')).toBeTruthy();

    expect(window.fetch).toHaveBeenCalledWith(
      'https://www.swapi.tech/api/people/?name=Luke'
    );
  });
});
