import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from './Badge';

interface SectionHeadingProps {
  badgeText?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  badgeText,
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={cn(
        'mb-12 space-y-3',
        isCenter ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl',
        className
      )}
    >
      {badgeText && (
        <div>
          <Badge variant="accent">{badgeText}</Badge>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          'h-1 w-12 rounded-full bg-gradient-to-r from-sky-500 to-blue-600',
          isCenter ? 'mx-auto' : ''
        )}
      />
    </div>
  );
}
