'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { TimelineContent } from '@/components/ui/timeline-animation';

export function HeroSection() {
  const timelineRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={timelineRef} className="min-h-screen bg-[#fafafa]">
      {/* ── Navigation ── */}
      <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold text-gray-900 hover:text-indigo-600 transition-colors">
            Hari Girish
          </Link>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <Link href="#projects" className="hover:text-indigo-600 transition-colors">
              Projects
            </Link>
            <a
              href="/Hari_GIrish_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-600 transition-colors"
            >
              Resume
            </a>
            <Link href="#contact" className="hover:text-indigo-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <main className="mx-auto max-w-5xl px-6 py-24 md:py-36">
        <div className="grid items-center gap-12 md:grid-cols-[55%_45%]">
          {/* Left — text */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <TimelineContent animationNum={1} timelineRef={timelineRef} className="w-fit">
              <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
                Undergraduate AI Researcher @ OSU Cancer Center
              </span>
            </TimelineContent>

            {/* Headline */}
            <TimelineContent
              as="h1"
              animationNum={2}
              timelineRef={timelineRef}
              className="text-5xl font-bold leading-tight tracking-tight text-gray-900 xl:text-6xl"
            >
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                Hari Girish.
              </span>
            </TimelineContent>

            {/* Subheadline */}
            <TimelineContent
              as="p"
              animationNum={3}
              timelineRef={timelineRef}
              className="max-w-lg text-lg leading-relaxed text-gray-600"
            >
              CS&amp;E student at Ohio State building AI systems — from biomedical imaging pipelines to agentic full-stack apps.
            </TimelineContent>

            {/* CTAs */}
            <TimelineContent
              animationNum={4}
              timelineRef={timelineRef}
              className="flex items-center gap-4"
            >
              <Link
                href="#projects"
                className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
              >
                View My Work
              </Link>
              <a
                href="https://github.com/harigirish"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-gray-500 transition-colors hover:text-indigo-600"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/harigirish"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-gray-500 transition-colors hover:text-indigo-600"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </TimelineContent>
          </div>

          {/* Right — photo */}
          <TimelineContent
            animationNum={5}
            timelineRef={timelineRef}
            className="relative flex justify-center md:justify-end"
          >
            {/* Decorative accent */}
            <div className="absolute -z-10 h-72 w-64 rotate-6 rounded-2xl bg-indigo-100 md:h-[420px] md:w-[320px]" />

            {/* Photo */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/ProfilePicture.jpg"
                alt="Hari Girish"
                width={340}
                height={440}
                className="object-cover"
                priority
              />
              <ProgressiveBlur
                className="pointer-events-none absolute bottom-0 left-0 h-[20%] w-full"
                blurIntensity={0.3}
              />
            </div>
          </TimelineContent>
        </div>
      </main>
    </div>
  );
}
