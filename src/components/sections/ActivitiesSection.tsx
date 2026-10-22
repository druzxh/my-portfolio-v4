'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Badge } from '@/components/common/Badge';
import { Users2, Calendar, Award, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';
import { slideUp } from '@/lib/motion';

export function ActivitiesSection() {
  const { activities } = portfolioData;

  return (
    <section id="activities" className="py-16 sm:py-20 relative">
      <Container>
        <SectionHeading
          badgeText="Komunitas &amp; Berbagi"
          title="Aktivitas &amp; Mentorship"
          subtitle="Partisipasi aktif dalam workshop pengembangan talenta software engineer dan komunitas kampus ITTS."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((act) => (
            <motion.div
              key={act.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={slideUp}
              className="p-6 sm:p-7 rounded-2xl glass-panel border border-slate-800/80 glow-card transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                    <Users2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {act.role}
                    </h3>
                    <p className="text-xs text-emerald-400 font-medium">
                      {act.organization}
                    </p>
                  </div>
                </div>

                <Badge variant="accent">
                  <Calendar className="h-3 w-3" />
                  <span>{act.period}</span>
                </Badge>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mt-4">
                {act.description}
              </p>

              <div className="mt-5 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-400">
                <HeartHandshake className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Membantu transfer knowledge dan best practices arsitektur API</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
