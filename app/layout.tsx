import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-atkinson",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pulso — O evento pulsa",
  description:
    "Cashless e gestão de eventos na mesma frequência. A Pulso conecta ingressos, portaria e PDV.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      data-theme="pulse"
      className={`${atkinson.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-base-100 font-sans text-base-content">
        {children}
      </body>
    </html>
  );
}
