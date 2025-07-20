import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SearchPanel } from './SearchPanel';

describe('SearchPanel', () => {
  const mockProps = {
    query: '',
    handleInputChange: vi.fn(),
    onSubmit: vi.fn(),
  };

  it('renders search input and button', () => {
    render(<SearchPanel {...mockProps} />);

    expect(screen.getByRole('textbox')).toBeTruthy();
    expect(screen.getByRole('button')).toBeInstanceOf(HTMLButtonElement);
  });

  it('updates input value when user types', () => {
    const { rerender } = render(<SearchPanel {...mockProps} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    const testValue = 'Luke';
    rerender(<SearchPanel {...mockProps} query={testValue} />);

    expect(input.value).toBe(testValue);
  });
});
