'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Container } from '@/components/common/Container';
import { SocialLink } from '@/components/common/SocialLink';
import { Button } from '@/components/common/Button';
import { Mail, MessageSquareCode, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/common/Icons';

export function Footer() {
  const { profile } = portfolioData;
  const currentYear = 2026;

  return (
    <footer id="contact" className="relative border-t border-slate-800/80 bg-slate-950/80 pt-16 pb-12 overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-sky-500/5 blur-3xl pointer-events-none" />

      <Container>
        {/* Top Call to Action Box */}
        <div className="p-8 sm:p-10 rounded-2xl glass-panel border border-slate-800 mb-12 relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                Mari Terhubung
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Tertarik berdiskusi atau kolaborasi proyek?
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Tersedia untuk peran magang strategis, kolaborasi backend instansi, atau pengembangan sistem modern. Kirimkan pesan langsung melalui WhatsApp atau Email.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                href={profile.links.whatsapp}
                target="_blank"
                variant="emerald"
                size="md"
                icon={<MessageSquareCode className="h-4 w-4" />}
              >
                Chat WhatsApp
              </Button>
              <Button
                href={`mailto:${profile.links.email}`}
                variant="outline"
                size="md"
                icon={<Mail className="h-4 w-4 text-sky-400" />}
              >
                Kirim Email
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800/60 text-xs text-slate-500">
          <div>
            <p>
              © {currentYear} {profile.name}. All rights reserved.
            </p>
            <p className="mt-0.5 text-slate-500">
              Diskominfo Kota Tangerang Selatan & Institut Teknologi Tangerang Selatan (ITTS).
            </p>
          </div>

          <div className="flex items-center gap-2">
            <SocialLink
              href={profile.links.github}
              icon={<GithubIcon className="h-4 w-4" />}
              label="GitHub Profile"
            />
            <SocialLink
              href={profile.links.linkedin}
              icon={<LinkedinIcon className="h-4 w-4" />}
              label="LinkedIn Profile"
            />
            {profile.links.instagram && (
              <SocialLink
                href={profile.links.instagram}
                icon={<InstagramIcon className="h-4 w-4" />}
                label="Instagram Profile"
              />
            )}
            <SocialLink
              href={`mailto:${profile.links.email}`}
              icon={<Mail className="h-4 w-4" />}
              label="Kirim Email Langsung"
            />
            <a
              href="#about"
              className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              title="Kembali ke atas"
              aria-label="Kembali ke atas"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
