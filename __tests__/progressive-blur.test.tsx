import { render } from '@testing-library/react';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

describe('ProgressiveBlur', () => {
  it('renders without crashing', () => {
    const { container } = render(<ProgressiveBlur />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders the correct number of blur layers (default 8)', () => {
    const { container } = render(<ProgressiveBlur />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.children.length).toBe(8);
  });

  it('renders custom blurLayers count', () => {
    const { container } = render(<ProgressiveBlur blurLayers={4} />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.children.length).toBe(4);
  });

  it('applies className to wrapper', () => {
    const { container } = render(<ProgressiveBlur className="test-class" />);
    expect(container.firstChild).toHaveClass('test-class');
  });
});
