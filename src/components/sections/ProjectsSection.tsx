'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ProjectCard } from './ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectType } from '@/types/portfolio';
import { fadeIn, staggerContainer } from '@/lib/motion';

export function ProjectsSection() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectType>('all');

  const filterOptions: { label: string; value: 'all' | ProjectType }[] = [
    { label: 'Semua Proyek', value: 'all' },
    { label: 'Enterprise / Publik', value: 'enterprise' },
    { label: 'Akademik & Sistem', value: 'academic' },
    { label: 'Komunitas & Tooling', value: 'community' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <section id="projects" className="py-16 sm:py-20 relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeading
            badgeText="Karya & Implementasi"
            title="Proyek Unggulan"
            subtitle="Pilihan sistem backend, arsitektur RESTful API, dan developer tooling yang telah dibangun."
            className="mb-0"
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800 self-start md:self-end">
            {filterOptions.map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveFilter(tab.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeFilter === tab.value
                    ? 'bg-sky-500 text-white shadow-sm shadow-sky-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
