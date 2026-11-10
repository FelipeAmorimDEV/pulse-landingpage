type SectionLinkProps = {
  href: string;
  children: string;
  className?: string;
};

export function SectionLink({ href, children, className = "" }: SectionLinkProps) {
  return (
    <a
      href={href}
      className={`link inline-block text-base font-bold underline decoration-current/40 underline-offset-4 ${className}`}
    >
      {children}
    </a>
  );
}
