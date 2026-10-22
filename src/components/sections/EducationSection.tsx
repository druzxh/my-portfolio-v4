'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Badge } from '@/components/common/Badge';
import { GraduationCap, BookOpen, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { slideUp } from '@/lib/motion';

export function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-16 sm:py-20 relative">
      <Container>
        <SectionHeading
          badgeText="Fondasi Akademik"
          title="Pendidikan Formal"
          subtitle="Penyelarasan teori ilmu komputer dengan implementasi arsitektur sistem tingkat lanjut di ITTS."
        />

        <div className="grid grid-cols-1 gap-6">
          {education.map((item) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={slideUp}
              className="p-6 sm:p-8 rounded-2xl glass-panel border border-slate-800/80 glow-card transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                    <GraduationCap className="h-4 w-4 shrink-0" />
                    <span>{item.institution}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {item.degree}
                  </h3>
                </div>

                <Badge variant="accent">
                  <Calendar className="h-3 w-3" />
                  <span>{item.period}</span>
                </Badge>
              </div>

              {/* Coursework & Focus Areas */}
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5 text-indigo-400" />
                  Fokus Pembelajaran &amp; Topik Unggulan:
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium"
                    >
                      <Award className="h-3 w-3 text-indigo-400 shrink-0" />
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
