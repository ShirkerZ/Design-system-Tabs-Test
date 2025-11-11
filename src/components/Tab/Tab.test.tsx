import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { Tab } from './Tab';

describe('Tab', () => {
  it('renders component correctly', () => {
    const { container } = render(<Tab label='Tab' />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Tab label='Test Tab' />);
    expect(screen.getByText('Test Tab')).toBeInTheDocument();
  });

  it('applies default pill variant when no variant provided', () => {
    const { container } = render(<Tab label='Tab' />);
    const tab = container.firstChild;
    expect(tab).toHaveClass('tab', 'pill');
  });

  it('applies selected class when selected is true', () => {
    const { container } = render(<Tab label='Tab' selected />);
    const tab = container.firstChild;
    expect(tab).toHaveClass('tab', 'selected');
  });

  it('does not apply selected class when selected is false', () => {
    const { container } = render(<Tab label='Tab' selected={false} />);
    const tab = container.firstChild;
    expect(tab).not.toHaveClass('selected');
  });

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn();
    render(<Tab label='Tab' onClick={handleClick} />);

    const tab = screen.getByText('Tab');
    await userEvent.click(tab);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders badge when badge prop is provided', () => {
    render(<Tab label='Tab' badge={{ label: 'Badge' }} />);
    expect(screen.getByText('Badge')).toBeInTheDocument();
  });

  it('renders badge when badge prop is provided with specific variant (positive)', () => {
    render(<Tab label='Tab' badge={{ label: 'Badge', variant: 'positive' }} />);
    expect(screen.getByText('Badge')).toHaveClass('badge', 'positive');
  });

  it('applies custom className', () => {
    const { container } = render(<Tab label='Tab' className='custom-class' />);
    const tab = container.firstChild;
    expect(tab).toHaveClass('tab', 'custom-class');
  });
});
