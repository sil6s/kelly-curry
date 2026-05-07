type IconProps = {
  className?: string;
};

export function UserIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21 C5.8 16.8, 8.5 15, 12 15 C15.5 15, 18.2 16.8, 20 21" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="M5 8 L12 13 L19 8" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 4 L10 4 L11.5 8 L9.5 10 C10.7 12.5, 12.5 14.3, 15 15.5 L17 13.5 L20 15 L20 18 C20 19.1, 19.1 20, 18 20 C10.3 20, 4 13.7, 4 6 C4 4.9, 4.9 4, 6 4 Z" />
    </svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3 L8 7 M16 3 L16 7 M4 10 L20 10" />
    </svg>
  );
}

export function MessageIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 5 L19 5 C20.1 5, 21 5.9, 21 7 L21 15 C21 16.1, 20.1 17, 19 17 L10 17 L5 21 L5 17 C3.9 17, 3 16.1, 3 15 L3 7 C3 5.9, 3.9 5, 5 5 Z" />
    </svg>
  );
}
