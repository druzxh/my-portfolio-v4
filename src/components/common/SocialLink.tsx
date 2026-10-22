import React from 'react';
import { cn } from '@/lib/utils';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

export function SocialLink({ href, icon, label, className }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={cn(
        'p-2.5 rounded-lg border border-slate-700/80 bg-slate-900/60 text-slate-400 hover:text-sky-400 hover:border-sky-500/50 hover:bg-slate-800 transition-all duration-200 active:scale-95 inline-flex items-center justify-center',
        className
      )}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </a>
  );
}
