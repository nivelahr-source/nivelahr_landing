import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NivelaHR — Consultoría en Recursos Humanos",
  description:
    "Acompañamos a empresas en crecimiento con soluciones modernas de gestión de personas — ágiles, customizadas y potenciadas con tecnología.",
  openGraph: {
    title: "NivelaHR — Consultoría en Recursos Humanos",
    description:
      "Reclutamiento, Desarrollo Organizacional y Tecnología aplicada a HR. Nacimos IA Ready.",
    url: "https://nivelahr.com",
    siteName: "NivelaHR",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
