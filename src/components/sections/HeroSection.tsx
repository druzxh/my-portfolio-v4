'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Container } from '@/components/common/Container';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { SocialLink } from '@/components/common/SocialLink';
import {
  FileText,
  MessageSquareCode,
  Building2,
  GraduationCap,
  Sparkles,
  Layers,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/common/Icons';
import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '@/lib/motion';

export function HeroSection() {
  const { profile } = portfolioData;

  return (
    <section
      id="about"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Background Gradients & Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col items-start max-w-3xl"
        >
          {/* Status Badge */}
          <motion.div variants={slideUp} className="mb-6">
            <Badge variant="success" pulse>
              <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
              <span>{profile.availability}</span>
            </Badge>
          </motion.div>

          {/* Name & Headline */}
          <motion.div variants={slideUp} className="space-y-4 mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Halo, Saya <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">{profile.name}</span>
            </h1>
            <p className="text-lg sm:text-xl font-medium text-slate-300 leading-snug">
              Programmer di <span className="text-sky-400">Diskominfo Tangerang Selatan</span> &amp; Mahasiswa Teknik Informatika di <span className="text-sky-400">ITTS</span>.
            </p>
          </motion.div>

          {/* Value Proposition / Summary */}
          <motion.p
            variants={slideUp}
            className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl"
          >
            {profile.summary}
          </motion.p>

          {/* Key Quick Badges / Micro-highlights */}
          <motion.div
            variants={slideUp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8"
          >
            <div className="flex items-center gap-3 p-3.5 rounded-xl glass-panel border border-slate-800/80">
              <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                <Building2 className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Pekerjaan Saat Ini</p>
                <p className="text-sm font-semibold text-slate-200">
                  Programmer Diskominfo Tangsel
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl glass-panel border border-slate-800/80">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                <GraduationCap className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Pendidikan</p>
                <p className="text-sm font-semibold text-slate-200">
                  S1 Informatika — ITTS
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Action Buttons */}
          <motion.div
            variants={slideUp}
            className="flex flex-wrap items-center gap-3.5 pt-2 w-full"
          >
            <Button
              href={profile.links.cv}
              variant="primary"
              size="lg"
              icon={<FileText className="h-4 w-4" />}
              download
            >
              Download CV (PDF)
            </Button>

            <Button
              href={profile.links.whatsapp}
              target="_blank"
              variant="emerald"
              size="lg"
              icon={<MessageSquareCode className="h-4 w-4" />}
            >
              Hubungi via WhatsApp
            </Button>

            <div className="flex items-center gap-2 sm:ml-2">
              <SocialLink
                href={profile.links.github}
                icon={<GithubIcon className="h-4 w-4" />}
                label="Profil GitHub"
              />
              <SocialLink
                href={profile.links.linkedin}
                icon={<LinkedinIcon className="h-4 w-4" />}
                label="Profil LinkedIn"
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
