import type {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from 'react';
import styles from '../styles/Website.module.css';

type BaseButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'quiet';
};

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsAnchor = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const variantClass =
    variant === 'secondary'
      ? styles['kbc-pill-charcoal']
      : variant === 'quiet'
        ? styles['kbc-link-quiet']
        : '';
  const classes =
    `${variant === 'quiet' ? '' : styles['kbc-pill']} ${variantClass} ${className}`.trim();

  if ('href' in props && props.href) {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
}
