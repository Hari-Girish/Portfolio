import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { TimelineContent } from '@/components/ui/timeline-animation';

describe('TimelineContent', () => {
  const ref = createRef<HTMLDivElement>();

  it('renders children', () => {
    render(
      <TimelineContent animationNum={1} timelineRef={ref}>
        <span>Hello</span>
      </TimelineContent>
    );
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('applies className', () => {
    const { container } = render(
      <TimelineContent animationNum={1} timelineRef={ref} className="my-class">
        content
      </TimelineContent>
    );
    expect(container.firstChild).toHaveClass('my-class');
  });

  it('renders as a different element when as prop is provided', () => {
    render(
      <TimelineContent as="h1" animationNum={1} timelineRef={ref}>
        Heading
      </TimelineContent>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
