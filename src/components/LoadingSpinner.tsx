'use client';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'yellow' | 'white';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'blue',
  className = ''
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-4 h-4';
      case 'lg':
        return 'w-8 h-8';
      case 'md':
      default:
        return 'w-6 h-6';
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'yellow':
        return 'border-yellow-600 border-t-transparent';
      case 'white':
        return 'border-white border-t-transparent';
      case 'blue':
      default:
        return 'border-blue-900 border-t-transparent';
    }
  };

  return (
    <div 
      className={`animate-spin rounded-full border-2 ${getSizeClasses()} ${getColorClasses()} ${className}`}
    />
  );
};

export default LoadingSpinner;