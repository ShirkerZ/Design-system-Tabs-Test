import { render, screen } from '@testing-library/react';
import { Tabs } from './Tabs';

describe('Tabs', () => {
  it('renders component correctly', () => {
    const { container } = render(<Tabs>
      <Tabs.Tab label="Tab 1" />
      <Tabs.Tab label="Tab 2" />
    </Tabs>);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders children', () => {
    render(
      <Tabs>
        <Tabs.Tab label="Tab 1" />
        <Tabs.Tab label="Tab 2" />
      </Tabs>
    );
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
  });

  it('applies default pill variant', () => {
    const { container } = render(
      <Tabs>
        <Tabs.Tab label="Tab 1" />
      </Tabs>
    );
    const tabs = container.firstChild;
    expect(tabs).toHaveClass('tabs', 'pill');
  });

  it('applies underline variant', () => {
    const { container } = render(
      <Tabs variant="underline">
        <Tabs.Tab label="Tab 1" />
      </Tabs>
    );
    const tabs = container.firstChild;
    expect(tabs).toHaveClass('tabs', 'underline');
  });

  it('provides variant context to children', () => {
    const { container } = render(
      <Tabs variant="underline">
        <Tabs.Tab label="Tab 1" />
      </Tabs>
    );
    const tab = container.querySelector('button');
    expect(tab).toHaveClass('tab', 'underline');
  });

  it('applies custom className', () => {
    const { container } = render(
      <Tabs className="custom-tabs">
        <Tabs.Tab label="Tab 1" />
      </Tabs>
    );
    const tabs = container.firstChild;
    expect(tabs).toHaveClass('tabs', 'custom-tabs');
  });

  it('allows Tab component to override context variant', () => {
    const { container } = render(
      <Tabs variant="pill">
        <Tabs.Tab label="Tab 1" variant="underline" />
      </Tabs>
    );
    const tab = container.querySelector('button');
    expect(tab).toHaveClass('tab', 'underline');
  });
});