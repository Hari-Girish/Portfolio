'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
// lucide-react in this project does not ship brand icons; using inline SVGs instead
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
                {/* GitHub */}
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/harigirish"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-gray-500 transition-colors hover:text-indigo-600"
              >
                {/* LinkedIn */}
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
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
