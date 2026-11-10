import Image from "next/image";

type LogoProps = {
  tone?: "light" | "forest";
  compact?: boolean;
};

export function Logo({ tone = "light", compact = false }: LogoProps) {
  const src = tone === "light" ? "/logo-light.svg" : "/logo-forest.svg";
  const height = compact ? "1.75rem" : "2.5rem";

  return (
    <Image
      src={src}
      alt="Pulso"
      width={146}
      height={49}
      priority={tone === "light" && !compact}
      className="w-auto"
      style={{ width: "auto", height }}
    />
  );
}
