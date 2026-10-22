'use client';

import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { ResumeModal } from '@/components/common/ResumeModal';
import { Menu, X, Terminal, FileText, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const navSectionIds = siteConfig.navItems.map((item) =>
    item.href.replace('#', '')
  );
  const activeSection = useScrollSpy(navSectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'glass-nav py-3 shadow-lg shadow-black/20'
            : 'bg-transparent py-5'
        )}
      >
        <Container size="wide">
          <div className="flex items-center justify-between">
            {/* Logo / Brand */}
            <a
              href="#about"
              className="flex items-center gap-2 group text-white font-semibold tracking-tight"
            >
              <div className="h-8 w-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:border-sky-400 transition-colors">
                <Terminal className="h-4 w-4" />
              </div>
              <span className="text-base font-bold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
                badrudin<span className="text-sky-400">.dev</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 rounded-full backdrop-blur-md">
              {siteConfig.navItems.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200',
                      isActive
                        ? 'bg-sky-500 text-white shadow-sm shadow-sky-500/40'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Action Button (Preview Resume & CV Modal Trigger) */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                type="button"
                onClick={() => setIsResumeOpen(true)}
                variant="outline"
                size="sm"
                icon={<Eye className="h-3.5 w-3.5 text-sky-400" />}
              >
                Preview Resume
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900/70 border border-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <div className="md:hidden mt-3 p-4 rounded-2xl glass-panel border border-slate-800 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col space-y-1">
                {siteConfig.navItems.map((item) => {
                  const sectionId = item.href.replace('#', '');
                  const isActive = activeSection === sectionId;

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'px-3.5 py-2.5 text-sm font-medium rounded-lg transition-colors flex items-center justify-between',
                        isActive
                          ? 'bg-sky-500/10 text-sky-400 font-semibold'
                          : 'text-slate-300 hover:bg-slate-800/60'
                      )}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                      )}
                    </a>
                  );
                })}
              </div>
              <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
                <Button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setIsResumeOpen(true);
                  }}
                  variant="primary"
                  size="md"
                  className="w-full"
                  icon={<Eye className="h-4 w-4" />}
                >
                  Preview Resume
                </Button>
              </div>
            </div>
          )}
        </Container>
      </header>

      {/* Reusable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
}
