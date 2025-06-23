import React from 'react';
import { clsx } from 'clsx';

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = 'md',
  className,
  onClick
}) => {
  const sizeClasses = {
    xs: 'h-6 w-6 text-xs',
    sm: 'h-8 w-8 text-sm',
    md: 'h-10 w-10 text-base',
    lg: 'h-12 w-12 text-lg',
    xl: 'h-16 w-16 text-xl',
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      className={clsx(
        'relative inline-flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden ring-2 ring-white shadow-lg shadow-blue-500/25 transition-all duration-300',
        sizeClasses[size],
        onClick && 'cursor-pointer hover:scale-110 hover:shadow-xl hover:shadow-blue-500/40 hover:ring-blue-400/50 transform focus:outline-none focus:ring-4 focus:ring-blue-500/30',
        !onClick && 'hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30',
        className
      )}
      onClick={onClick}
    >
      {src ? (
        <>
          <img
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
            src={src}
            alt={alt || name || 'Avatar'}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-full"></div>
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full"></div>
          <span className="relative font-bold text-white select-none drop-shadow-sm z-10">
            {name ? getInitials(name) : '?'}
          </span>
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/10 rounded-full"></div>
        </>
      )}
      <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20"></div>
    </Component>
  );
};