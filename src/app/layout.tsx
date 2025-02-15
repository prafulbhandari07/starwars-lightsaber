import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Starwars Lightsaber Configurator",
  description: "Created by Wadu bot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
