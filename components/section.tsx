import type { ReactNode, Ref } from "react";

type SectionProps = {
  id?: string;
  tone?: string;
  className?: string;
  frame?: boolean;
  children: ReactNode;
  ref?: Ref<HTMLElement>;
};

export function Section({
  id,
  tone = "",
  className = "",
  frame = true,
  children,
  ref,
}: SectionProps) {
  return (
    <section
      ref={ref}
      id={id}
      className={`scroll-mt-28 ${frame ? "py-16 lg:py-24" : ""} ${tone} ${className}`}
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-16">
        {children}
      </div>
    </section>
  );
}
