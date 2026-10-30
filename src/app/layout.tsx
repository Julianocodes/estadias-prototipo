import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Estadias | Protótipo de busca de acomodações",
  description:
    "Protótipo educacional de busca e detalhes de acomodações, desenvolvido com Next.js, React, TypeScript e Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
