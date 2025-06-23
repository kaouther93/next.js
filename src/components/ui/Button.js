import Link from 'next/link';

const Button = ({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'medium',
  fullWidth = false,
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'button';
  const variantClasses = {
    primary: 'button-primary',
    secondary: 'button-secondary',
    outline: 'button-outline'
  };
  const sizeClasses = {
    small: 'button-small',
    medium: 'button-medium',
    large: 'button-large'
  };

  const className = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'button-full' : ''}`;

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto')) {
      return (
        <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
