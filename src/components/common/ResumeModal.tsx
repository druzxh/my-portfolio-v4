'use client';

import React, { useState, useEffect } from 'react';
import { portfolioData } from '@/data/portfolio';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Download,
  ExternalLink,
  FileText,
  Building2,
  GraduationCap,
  Sparkles,
  Mail,
  Phone,
  CheckCircle2,
} from 'lucide-react';
import { Button } from './Button';
import { Badge } from './Badge';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { profile, experience, education, skills, activities } = portfolioData;
  const [activeTab, setActiveTab] = useState<'interactive' | 'pdf'>('interactive');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-900/90 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    Curriculum Vitae — {profile.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Programmer Diskominfo Tangsel &amp; Mahasiswa ITTS
                  </p>
                </div>
              </div>

              {/* Header Right Actions */}
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center bg-slate-800/80 p-0.5 rounded-lg border border-slate-700">
                  <button
                    type="button"
                    onClick={() => setActiveTab('interactive')}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                      activeTab === 'interactive'
                        ? 'bg-sky-500 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Resume Digital
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('pdf')}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                      activeTab === 'pdf'
                        ? 'bg-sky-500 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    File PDF
                  </button>
                </div>

                <Button
                  href={profile.links.cv}
                  variant="primary"
                  size="sm"
                  icon={<Download className="h-3.5 w-3.5" />}
                  download
                >
                  <span className="hidden sm:inline">Unduh PDF</span>
                </Button>

                <button
                  type="button"
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Tutup pratinjau"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-5 sm:p-8 space-y-8 flex-1">
              {activeTab === 'pdf' ? (
                <div className="w-full h-[65vh] rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex flex-col">
                  <iframe
                    src={`${profile.links.cv}#toolbar=0`}
                    className="w-full h-full"
                    title="PDF Resume Preview"
                  />
                  <div className="p-3 bg-slate-900 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
                    <span>Mengalami kendala melihat PDF di perangkat Anda?</span>
                    <a
                      href={profile.links.cv}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:underline flex items-center gap-1 font-medium"
                    >
                      Buka di tab baru <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Digital Resume Header Card */}
                  <div className="p-6 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col md:flex-row justify-between gap-4">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-white tracking-tight">
                        {profile.name}
                      </h2>
                      <p className="text-sm font-medium text-sky-400">
                        {profile.headline}
                      </p>
                      <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                        {profile.summary}
                      </p>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-400 shrink-0 self-start">
                      <p className="flex items-center gap-2">
                        <Mail className="h-3.5 w-3.5 text-sky-400" />
                        <span>{profile.links.email}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="h-3.5 w-3.5 text-emerald-400" />
                        <span>+62 815-8576-8935</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Building2 className="h-3.5 w-3.5 text-indigo-400" />
                        <span>Kota Tangerang Selatan, Indonesia</span>
                      </p>
                    </div>
                  </div>

                  {/* Experience Timeline */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-4 flex items-center gap-2">
                      <Building2 className="h-4 w-4" /> Pengalaman Kerja &amp; Praktik
                    </h4>

                    <div className="space-y-6 pl-4 border-l-2 border-slate-800">
                      {experience.map((exp) => (
                        <div key={exp.id} className="relative group">
                          <div className="absolute -left-[23px] top-1 h-3.5 w-3.5 rounded-full bg-slate-900 border-2 border-sky-400" />
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                            <h5 className="text-sm font-bold text-white">
                              {exp.role}
                            </h5>
                            <span className="text-xs text-slate-400">
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-xs font-medium text-sky-400 mb-2">
                            {exp.organization} {exp.employmentType && `• ${exp.employmentType}`}
                          </p>

                          <ul className="space-y-1.5 mb-3">
                            {exp.responsibilities.map((resp, idx) => (
                              <li
                                key={idx}
                                className="text-xs text-slate-300 leading-relaxed flex items-start gap-2"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-slate-600 shrink-0 mt-1.5" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>

                          {exp.skills && (
                            <div className="flex flex-wrap gap-1">
                              {exp.skills.map((s) => (
                                <Badge key={s} variant="tech">
                                  {s}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" /> Pendidikan Formal
                    </h4>
                    {education.map((edu) => (
                      <div
                        key={edu.id}
                        className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 flex flex-col sm:flex-row justify-between gap-2"
                      >
                        <div>
                          <p className="text-sm font-bold text-white">
                            {edu.degree}
                          </p>
                          <p className="text-xs text-indigo-400 font-medium">
                            {edu.institution}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {edu.highlights.map((h, i) => (
                              <span
                                key={i}
                                className="text-[11px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                              >
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>
                        <span className="text-xs text-slate-400 font-medium shrink-0">
                          {edu.period}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Key Skills Grid */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
                      <Sparkles className="h-4 w-4" /> Keahlian Utama
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {skills.map((cat) => (
                        <div
                          key={cat.category}
                          className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800"
                        >
                          <p className="text-xs font-bold text-slate-200 mb-2">
                            {cat.category}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {cat.items.slice(0, 10).map((skill) => (
                              <span
                                key={skill}
                                className="text-[11px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3.5 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between shrink-0 text-xs">
              <span className="text-slate-500 hidden sm:inline">
                Terverifikasi dari profil LinkedIn &amp; portofolio resmi Badrudin
              </span>
              <div className="flex items-center gap-2 ml-auto">
                <Button variant="ghost" size="sm" onClick={onClose}>
                  Tutup
                </Button>
                <Button
                  href={profile.links.cv}
                  variant="primary"
                  size="sm"
                  icon={<Download className="h-3.5 w-3.5" />}
                  download
                >
                  Unduh CV (PDF)
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
