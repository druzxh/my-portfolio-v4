'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Badge } from '@/components/common/Badge';
import { Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { slideUp } from '@/lib/motion';

export function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 sm:py-20 relative">
      <Container>
        <SectionHeading
          badgeText="Pengalaman Profesional"
          title="Rekam Jejak Pekerjaan"
          subtitle="Implementasi arsitektur nyata di sektor pemerintahan daerah dan sistem pelayanan publik terdistribusi."
        />

        <div className="relative pl-4 sm:pl-8 border-l border-slate-800 space-y-12">
          {experience.map((item) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={slideUp}
              className="relative group"
            >
              {/* Timeline indicator node */}
              <div className="absolute -left-[25px] sm:-left-[41px] top-1.5 h-4 w-4 rounded-full bg-slate-950 border-2 border-sky-400 group-hover:scale-125 transition-transform">
                <div className="h-1.5 w-1.5 rounded-full bg-sky-400 m-auto mt-0.5" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-slate-800/80 glow-card transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sky-400 text-sm font-medium mt-1">
                      <Building2 className="h-4 w-4 shrink-0" />
                      <span>{item.organization}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="accent">
                      <Calendar className="h-3 w-3" />
                      <span>{item.period}</span>
                    </Badge>
                    {item.location && (
                      <Badge variant="outline">
                        <MapPin className="h-3 w-3" />
                        <span>{item.location}</span>
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Responsibilities list */}
                <div className="mt-5 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Tanggung Jawab &amp; Kontribusi Utama:
                  </p>
                  <ul className="space-y-2.5">
                    {item.responsibilities.map((resp, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed"
                      >
                        <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
