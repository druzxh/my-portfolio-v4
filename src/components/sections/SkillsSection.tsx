'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Code2, Server, Database, Check, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { slideUp } from '@/lib/motion';

export function SkillsSection() {
  const { skills } = portfolioData;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Languages':
        return <Code2 className="h-5 w-5 text-sky-400" />;
      case 'Web Development & Frameworks':
        return <Server className="h-5 w-5 text-indigo-400" />;
      case 'Data Science & Machine Learning':
        return <Cpu className="h-5 w-5 text-amber-400" />;
      case 'DevOps, Cloud & Database':
        return <Database className="h-5 w-5 text-emerald-400" />;
      default:
        return <Code2 className="h-5 w-5 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 relative">
      <Container>
        <SectionHeading
          badgeText="Teknologi &amp; Kompetensi"
          title="Keahlian &amp; Peralatan"
          subtitle="Kumpulan bahasa pemrograman, kerangka kerja web & backend modern, machine learning, data science, basis data, dan tooling DevOps."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={slideUp}
              transition={{ delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl glass-panel border border-slate-800/80 glow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {cat.category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cat.items.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/60 hover:border-slate-700 text-xs font-medium text-slate-300 transition-colors"
                    >
                      <Check className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                      <span>{skill}</span>
                    </div>
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
