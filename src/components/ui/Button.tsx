'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit';
}

const variants = {
  primary:
    'bg-[#10b981] text-white hover:bg-[#059669] shadow-lg shadow-[#10b981]/25',
  secondary:
    'bg-black text-white hover:bg-gray-800',
  outline:
    'border-2 border-[#10b981] text-[#10b981] hover:bg-[#10b981] hover:text-white',
  ghost:
    'text-[#111827] hover:bg-gray-100',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  onClick,
  disabled,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer select-none ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  const content = (
    <motion.span
      className={baseClasses}
      whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return <Link href={href} className="inline-block">{content}</Link>;
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className="inline-block">
      {content}
    </button>
  );
}
