import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'emerald';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  download?: boolean | string;
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  icon,
  iconPosition = 'left',
  download,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 active:scale-[0.98] cursor-pointer rounded-lg select-none disabled:opacity-50 disabled:pointer-events-none gap-2';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 rounded-md',
    md: 'text-sm px-4 py-2.5 rounded-lg',
    lg: 'text-base px-6 py-3 rounded-xl font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 border border-sky-400/30',
    outline:
      'border border-slate-700/80 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:text-white backdrop-blur-sm',
    ghost:
      'text-slate-300 hover:text-white hover:bg-slate-800/60 bg-transparent',
    emerald:
      'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 border border-emerald-500/30',
  };

  const classes = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        download={download}
      >
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
}
