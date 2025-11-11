import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders component correctly', () => {
    const { container } = render(<Badge label='Badge' />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Badge label='Test Badge' />);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  it('applies default neutral variant', () => {
    const { container } = render(<Badge label='Badge' />);
    const badge = container.firstChild;
    expect(badge).toHaveClass('badge', 'neutral');
  });

  it('applies positive variant', () => {
    const { container } = render(<Badge label='Badge' variant='positive' />);
    const badge = container.firstChild;
    expect(badge).toHaveClass('badge', 'positive');
  });

  it('applies negative variant', () => {
    const { container } = render(<Badge label='Badge' variant='negative' />);
    const badge = container.firstChild;
    expect(badge).toHaveClass('badge', 'negative');
  });

  it('applies custom className', () => {
    const { container } = render(<Badge label='Badge' className='custom-class' />);
    const badge = container.firstChild;
    expect(badge).toHaveClass('badge', 'custom-class');
  });
});
