import { render, screen } from '@testing-library/react';
import { HeroSection } from '@/components/ui/hero-section';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

jest.mock('lucide-react', () => ({
  Github: () => null,
  Linkedin: () => null,
}));

jest.mock('@/components/ui/progressive-blur', () => ({
  ProgressiveBlur: () => null,
}));

jest.mock('@/components/ui/timeline-animation', () => ({
  TimelineContent: ({ children, as: Tag = 'div', className, ...props }: {
    children?: React.ReactNode;
    as?: React.ElementType;
    className?: string;
    animationNum?: number;
    timelineRef?: unknown;
  }) => <Tag className={className} {...props}>{children}</Tag>,
}));

describe('HeroSection', () => {
  it('renders name in the heading', () => {
    render(<HeroSection />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hari Girish');
  });

  it('renders the role badge', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Undergraduate AI Researcher/i)).toBeInTheDocument();
  });

  it('renders the subheadline', () => {
    render(<HeroSection />);
    expect(screen.getByText(/CS&E student at Ohio State/i)).toBeInTheDocument();
  });

  it('renders the primary CTA', () => {
    render(<HeroSection />);
    expect(screen.getByRole('link', { name: /view my work/i })).toBeInTheDocument();
  });

  it('renders nav links', () => {
    render(<HeroSection />);
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  it('renders profile image with alt text', () => {
    render(<HeroSection />);
    expect(screen.getByAltText('Hari Girish')).toBeInTheDocument();
  });
});
