import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'success' | 'outline' | 'tech';
  pulse?: boolean;
}

export function Badge({
  children,
  className,
  variant = 'default',
  pulse = false,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: 'bg-slate-800/80 text-slate-200 border border-slate-700/60',
    accent: 'bg-sky-500/10 text-sky-400 border border-sky-500/30',
    success: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30',
    outline: 'border border-slate-700 text-slate-400 bg-transparent',
    tech: 'bg-slate-900/90 text-slate-300 border border-slate-800 text-xs font-mono',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-all',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      {children}
    </span>
  );
}
