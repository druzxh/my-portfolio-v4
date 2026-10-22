'use client';

import React from 'react';
import { ProjectItem } from '@/types/portfolio';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { ExternalLink, ShieldCheck, Layers } from 'lucide-react';
import { GithubIcon } from '@/components/common/Icons';
import { motion } from 'framer-motion';
import { cardHover } from '@/lib/motion';

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'enterprise':
        return 'text-sky-400 bg-sky-500/10 border-sky-500/30';
      case 'academic':
        return 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30';
      case 'community':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      default:
        return 'text-slate-300 bg-slate-800 border-slate-700';
    }
  };

  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl glass-panel border border-slate-800/80 glow-card transition-all h-full"
    >
      <div className="space-y-4">
        {/* Card Header with Type Badge */}
        <div className="flex items-center justify-between gap-2">
          <span
            className={`text-xs px-2.5 py-1 rounded-md font-semibold tracking-wide border ${getTypeColor(
              project.type
            )}`}
          >
            {project.typeLabel || project.type.toUpperCase()}
          </span>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
                title="Lihat Kode di GitHub"
                aria-label={`GitHub repo untuk ${project.title}`}
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-sky-400 p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
                title="Lihat Live Demo"
                aria-label={`Live demo untuk ${project.title}`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-sky-300">
          {project.title}
        </h3>

        {/* Problem Statement */}
        <div className="space-y-1.5 text-xs text-slate-300">
          <p className="font-semibold text-sky-400 uppercase tracking-wider text-[11px] flex items-center gap-1">
            <ShieldCheck className="h-3.5 w-3.5" /> Masalah &amp; Kebutuhan:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm">
            {project.problemSolved}
          </p>
        </div>

        {/* Solution Statement if available */}
        {project.solution && (
          <div className="space-y-1.5 text-xs text-slate-400">
            <p className="font-semibold text-slate-300 uppercase tracking-wider text-[11px] flex items-center gap-1">
              <Layers className="h-3.5 w-3.5 text-indigo-400" /> Solusi Arsitektur:
            </p>
            <p className="text-slate-400 leading-relaxed text-xs">
              {project.solution}
            </p>
          </div>
        )}
      </div>

      {/* Tech Stack Chips & Action Link */}
      <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="tech">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-2 pt-2">
          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              target="_blank"
              variant="outline"
              size="sm"
              icon={<GithubIcon className="h-3.5 w-3.5" />}
              className="w-full"
            >
              Repository
            </Button>
          )}
          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              target="_blank"
              variant="primary"
              size="sm"
              icon={<ExternalLink className="h-3.5 w-3.5" />}
              className="w-full"
            >
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
